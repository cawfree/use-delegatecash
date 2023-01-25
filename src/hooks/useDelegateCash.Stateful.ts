import * as React from 'react';

import {
  Params,
  Returns,
  DelegateCashState,
  DelegateCashMethod,
} from '../@types';

import {useDelegateCash} from './useDelegateCash';

export function useDelegateCashStateful<
  Method extends DelegateCashMethod,
>({
  method,
  params,
  skip = false,
}: {
  readonly method: Method;
  readonly params: Params<Method>;
  readonly skip?: boolean;
}) {
  const dc = useDelegateCash();

  const [state, setState] = React.useState<DelegateCashState<Method>>({
    loading: true,
  });

  React.useEffect(() => void (async () => {
    if (skip) return;

    try {
      setState({loading: true});

      const maybeMethod = dc[method];

      if (typeof maybeMethod !== 'function') throw new Error(`"${method}" is not a valid function.`);

      const result: Returns<Method> = await maybeMethod(
        // @ts-ignore
        ...params
      );

      setState({loading: false, result});
    } catch (cause: any) {
      setState({
        loading: false,
        error: new Error(`Failed to execute "${method}".`, cause),
      });
    }
  })(), [params, method, dc, skip]);

  return state;
}
