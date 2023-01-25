import React from 'react';

import {isNonEmptyString} from '../utils';

import {useDelegateCashStateful} from './useDelegateCash.Stateful';

export function useGetDelegatesForAll({
  vault,
}: {
  readonly vault: string | null | undefined;
}) {
  return useDelegateCashStateful({
    method: 'getDelegatesForAll',
    params: React.useMemo(() => [vault || ''], [vault]),
    skip: !isNonEmptyString(vault),
  });
}
