import { Dispatch, Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../../../shared/redux/setup/rootReducer'

const CHANGE_COUNT = 'count/CHANGE_COUNT'

interface setToOneAction extends Action {
  type: 'count/CHANGE_COUNT'
  payload: number
}

export const setToOne = (): setToOneAction => ({
  type: CHANGE_COUNT,
  payload: 1,
})

export const setToTwoAsync = (): ThunkAction<
  void,
  {},
  RootState,
  setToOneAction
> => {
  return (dispatch: Dispatch<setToOneAction>) => {
    return dispatch({
      type: CHANGE_COUNT,
      payload: 2,
    })
  }
}

export interface DispatchProps {
  setToOne: () => setToOneAction
  setToTwoAsync: () => ThunkAction<void, {}, RootState, setToOneAction>
}

export type ActionTypes = setToOneAction

interface State {
  count: number
}

const initialState: State = {
  count: 0,
}

export default function (state = initialState, action: ActionTypes): State {
  switch (action.type) {
    case CHANGE_COUNT:
      return {
        ...state,
        count: action.payload,
      }

    default:
      return state
  }
}
