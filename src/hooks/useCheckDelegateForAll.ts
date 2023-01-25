import React from 'react';

import {isNonEmptyString} from '../utils';

import {useDelegateCashStateful} from './useDelegateCash.Stateful';

export function useCheckDelegateForAll({
  delegate,
  vault,
}: {
  readonly delegate: string | null | undefined;
  readonly vault: string | null | undefined;
}) {
  const skip = !(isNonEmptyString(delegate) && isNonEmptyString(vault));

  return useDelegateCashStateful({
    method: 'checkDelegateForAll',
    params: React.useMemo(() => [delegate || '', vault || ''], [delegate, vault]),
    skip,
  });
}
