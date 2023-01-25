import * as React from 'react';

import {isNonEmptyString} from '../utils';

import {useDelegateCashStateful} from './useDelegateCash.Stateful';

export function useGetDelegatesForContract({
  vault,
  contract,
}: {
  readonly vault: string | null | undefined;
  readonly contract: string | null | undefined;
}) {
  const skip = !(isNonEmptyString(vault) && isNonEmptyString(contract));

  return useDelegateCashStateful({
    method: 'getDelegatesForContract',
    params: React.useMemo(
      () => [vault || '', contract || ''],
      [vault, contract]
    ),
    skip,
  });
}
