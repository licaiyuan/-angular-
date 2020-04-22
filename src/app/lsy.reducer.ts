import { createReducer, on } from '@ngrx/store';
import { Szzh, decrement, reset } from './lsy.action';
import { Action } from '@ngrx/store';
export interface State {
  zh: any;
  ip: string;
}
export const initialState: State = {
  zh: 'zxcz',
  ip: 'http://39.108.180.151:10010',
};

// const _counterReducer = createReducer(
//   initialState,
//   on(Szzh, (state, action) => ({ ...state, zh: action.zh }))
// );
export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'szzh':
      console.log(action);
      return { ...state, ...{ zh: action.zh } };

    default:
      return state;
  }
}
// export function counterReducer(state, action) {
//   return _counterReducer(state, action);
// }
