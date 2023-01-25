import {
  DelegateCashState,
  DelegateCashMethod,
  DelegateCashError,
} from '../@types';

import {isDelegateCashResult} from './isDelegateCashResult';

export function isDelegateCashError<
  Method extends DelegateCashMethod
 >(state: DelegateCashState<Method>): state is DelegateCashError {
  return !state.loading && !isDelegateCashResult(state);
}
