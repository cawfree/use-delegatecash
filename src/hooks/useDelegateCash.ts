import * as React from 'react';
import {DelegateCash} from 'delegatecash';
import {ethers} from 'ethers';
import {useClient} from 'wagmi';

export function useDelegateCash() {
  const {provider} = useClient<
    ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider
  >();
  return React.useMemo(
    () => new DelegateCash(provider),
    [provider]
  );
}
