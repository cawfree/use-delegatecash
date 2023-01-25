import {
  DelegateCashState,
  DelegateCashMethod,
  DelegateCashResult,
} from '../@types';

export function isDelegateCashResult<
  Method extends DelegateCashMethod
>(state: DelegateCashState<Method>): state is DelegateCashResult<Method> {
  return !state.loading && ('result' in state);
}
