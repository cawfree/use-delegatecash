import * as React from 'react';

import {isNonEmptyString} from '../utils';

import {useDelegateCashStateful} from './useDelegateCash.Stateful';

export function useGetDelegationsByDelegate({
  delegate,
}: {
  readonly delegate: string | null | undefined;
}) {
  const skip = !isNonEmptyString(delegate);

  return useDelegateCashStateful({
    method: 'getDelegationsByDelegate',
    params: React.useMemo(
      () => [delegate || ''],
      [delegate]
    ),
    skip,
  });
}
