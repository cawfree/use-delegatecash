import * as React from 'react';
import {DelegateCash} from 'delegatecash';
import {ethers} from 'ethers';
import {useProvider, useSigner} from 'wagmi';

type DelegateCashProvider = ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider;

export function useDelegateCash() {
  const provider = useProvider<DelegateCashProvider>();
  const {data: signer} = useSigner();

  return React.useMemo(
    () => new DelegateCash(provider),
    [provider, signer]
  );
}
