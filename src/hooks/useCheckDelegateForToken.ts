import * as React from 'react';

import {isNonEmptyString} from '../utils';

import {useDelegateCashStateful} from './useDelegateCash.Stateful';

export function useCheckDelegateForToken({
  delegate,
  vault,
  contract,
  tokenId,
}: {
  readonly delegate: string | null | undefined;
  readonly vault: string | null | undefined;
  readonly contract: string | null | undefined;
  readonly tokenId: number | null | undefined;
}) {
  const skip = !(isNonEmptyString(delegate) && isNonEmptyString(vault) && isNonEmptyString(contract)) || typeof tokenId !== 'number';

  return useDelegateCashStateful({
    method: 'checkDelegateForToken',
    params: React.useMemo(
      () => [delegate || '', vault || '', contract || '', tokenId || 0],
      [delegate, vault, contract, tokenId]
    ),
    skip,
  });
}
