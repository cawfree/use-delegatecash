# use-delegatecash
⚛️ 💸 React.js hooks for [__delegate.cash__](https://delegate.cash) which enable you to build safer user experiences powered by asset delegation. Supports both [__React__](https://reactjs.org/) and [__React Native__](https://reactnative.dev).

### 🚀 Getting Started

To get started, make sure you've got the following dependencies installed:

```
yarn add ethers wagmi use-delegatecash
```

> 💭 `use-delegatecash` assumes you're already using [`wagmi`](https://github.com/wagmi-dev/wagmi) hooks.

### ✍️ Usage

`use-delegatecash` wraps all of the getter functions exported by [`delegatecash`](https://github.com/delegatecash/delegatecash-javascript-sdk) inside stateful typesafe React hooks. You can also `useDelegateCash()` to return a [`DelegateCash`](https://github.com/delegatecash/delegatecash-javascript-sdk/blob/ef2f7b2d0e50b7b2ac8a9faef0edd1ed07e6807a/src/index.ts#L7) object which can be used to initiate transactions.

```typescript
import * as React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  useCheckDelegateForAll,
  useGetDelegatesForContract,
  useCheckDelegateForContract,
  useCheckDelegateForToken,
  useDelegateCash,
  useGetContractLevelDelegations,
  useGetDelegatesForAll,
  useGetDelegatesForContract,
  useGetDelegationsByDelegate,
  useGetTokenLevelDelegations,
  isDelegateCashResult,
  isDelegateCashError,
} from 'use-delegatecash';

export const AppExample = React.memo(
  function AppExample(): JSX.Element {
    const state = useGetDelegatesForAll({
      vault: '0x312e71162Df834A87a2684d30562b94816b0f072',
    });
    return (
      <View style={[StyleSheet.absoluteFill, styles.center]}>
        {isDelegateCashError(state)
          ? <Text children={state.error.message} />
          : isDelegateCashResult(state)
          ? <Text children="Got result!" />
          : <ActivityIndicator />}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  center: {alignItems: 'center', justifyContent: 'center'},
});
```

### ✌️License
[__MIT__](./LICENSE)
