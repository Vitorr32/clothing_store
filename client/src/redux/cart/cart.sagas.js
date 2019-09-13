import { all, call, takeLatest, put } from 'redux-saga/effects';
import * as types from '../user/user.types';
import { clearCart } from './cart.actions';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignoutSuccess() {
  yield takeLatest(types.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignoutSuccess)]);
}
