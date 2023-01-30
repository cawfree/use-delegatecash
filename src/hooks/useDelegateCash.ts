import * as React from 'react';
import {DelegateCash} from 'delegatecash';
import {ethers} from 'ethers';
import {useProvider, useSigner} from 'wagmi';

type DelegateCashProvider = ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider;

const instantiateDelegateCash = (
  provider: DelegateCashProvider | undefined
) => {
  try {
    if (provider) return new DelegateCash(provider);

    return new DelegateCash();
  } catch (e) {
    return new DelegateCash();
  }
};

export function useDelegateCash() {
  const provider = useProvider<DelegateCashProvider>();
  const {data: signer} = useSigner();

  return React.useMemo(
    () => {
      const dc = instantiateDelegateCash(provider);

      if (signer) dc.signer = signer;

      return dc;
    },
    [provider, signer]
  );
}
