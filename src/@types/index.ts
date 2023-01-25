import {useDelegateCash} from '../hooks';

export type DelegateCash = ReturnType<typeof useDelegateCash>;
export type DelegateCashMethod = keyof Omit<DelegateCash, 'provider' | 'signer' | 'delegationContract'>;

export type DelegateCashLoading = {
  readonly loading: true;
};

export type Params<Method extends DelegateCashMethod> = Parameters<DelegateCash[Method]>;
export type Returns<Method extends DelegateCashMethod> = Awaited<ReturnType<DelegateCash[Method]>>;

export type DelegateCashResult<Method extends DelegateCashMethod> = {
  readonly loading: false;
  readonly result: Returns<Method>;
};

export type DelegateCashError = {
  readonly loading: false;
  readonly error: Error;
};

export type DelegateCashState<Method extends DelegateCashMethod> =
  | DelegateCashLoading
  | DelegateCashError
  | DelegateCashResult<Method>;
