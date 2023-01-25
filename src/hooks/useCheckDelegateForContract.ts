import * as React from 'react';

import {isNonEmptyString} from '../utils';

import {useDelegateCashStateful} from './useDelegateCash.Stateful';

export function useCheckDelegateForContract({
  delegate,
  vault,
  contract,
}: {
  readonly delegate: string | null | undefined;
  readonly vault: string | null | undefined;
  readonly contract: string | null | undefined;
}) {
  const skip = !(isNonEmptyString(delegate) && isNonEmptyString(vault) && isNonEmptyString(contract));

  return useDelegateCashStateful({
    method: 'checkDelegateForContract',
    params: React.useMemo(
      () => [delegate || '', vault || '', contract || ''],
      [delegate, vault, contract]
    ),
    skip,
  });
}
