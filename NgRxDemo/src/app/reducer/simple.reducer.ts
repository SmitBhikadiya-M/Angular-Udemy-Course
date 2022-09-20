import { Action } from '@ngrx/store';

export const HINDI = 'hindi';
export const GUJRATI = 'gujrati';

export function SimpleReducer(state: string = 'I am raju', action: Action) {
  switch (action.type) {
    case HINDI:
      return 'मैं हूँ राजू';
    case GUJRATI:
      return 'હું રાજુ છું';
    default:
      return state;
  }
}

