import * as React from 'react';
import {DelegateCash} from 'delegatecash';
import {ethers} from 'ethers';
import {useProvider} from 'wagmi';

type DelegateCashProvider = ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider;

export function useDelegateCash() {
  const provider = useProvider<DelegateCashProvider>();
  return React.useMemo(
    () => new DelegateCash(provider),
    [provider]
  );
}
