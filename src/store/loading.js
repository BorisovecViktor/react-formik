import { Action } from 'redux';

const START_LOADING = 'START_LOADING';
const FINISH_LOADING = 'FINISH_LOADING';

type SetLoading = Action<typeof START_LOADING | typeof FINISH_LOADING> & {
  loading: boolean;
};

export const startLoading = () => ({ type: START_LOADING });
export const finishLoading = () => ({ type: FINISH_LOADING });

type PossibleActions = SetLoading;

const reducer = (loading = false, action: PossibleActions) => {
  switch (action.type) {
    case START_LOADING:
      return true;

    case FINISH_LOADING:
      return false;

    default: return loading;
  }
}

export default reducer;
