import * as React from 'react';
import {DelegateCash} from 'delegatecash';
import {ethers} from 'ethers';
import {useClient, useSigner} from 'wagmi';

type DelegateCashProvider = ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider;

export function useDelegateCash() {
  const {provider} = useClient<DelegateCashProvider>();
  const {data: signer} = useSigner();

  //const provider = React.useMemo<DelegateCashProvider>(() => ({
  //  ...defaultProvider,
  //  // @ts-ignore
  //  //getSigner: () => signer,
  //}), [defaultProvider, signer]);

  return React.useMemo(
    () => new DelegateCash(provider),
    [provider, signer]
  );
}
