import React from 'react';

import {isNonEmptyString} from '../utils';

import {useDelegateCashStateful} from './useDelegateCash.Stateful';

export function useGetContractLevelDelegations({
  vault,
}: {
  readonly vault: string | null | undefined;
}) {
  return useDelegateCashStateful({
    method: 'getContractLevelDelegations',
    params: React.useMemo(() => [vault || ''], [vault]),
    skip: !isNonEmptyString(vault),
  });
}
