import * as React from 'react';

import {isNonEmptyString} from '../utils';

import {useDelegateCashStateful} from './useDelegateCash.Stateful';

export function useGetTokenLevelDelegations({
  vault,
}: {
  readonly vault: string | null | undefined;
}) {
  const skip = !isNonEmptyString(vault);

  return useDelegateCashStateful({
    method: 'getTokenLevelDelegations',
    params: React.useMemo(
      () => [vault || ''],
      [vault]
    ),
    skip,
  });
}
