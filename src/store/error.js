import { Action } from 'redux';


const SET_ERROR = 'SET_ERROR';

type SetErrorAction = Action<typeof SET_ERROR> & {
  errorMessage: string;
};

export const setError = (errorMessage: string) => ({ type: SET_ERROR, errorMessage });

type PossibleActions = SetErrorAction;

const reducer = (errorMessage = '', action: PossibleActions) => {
  switch (action.type) {
    case SET_ERROR:
      return action.errorMessage;

    default:
      return errorMessage;
  }
};

export default reducer;
