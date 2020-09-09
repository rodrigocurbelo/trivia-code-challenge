import { Dispatch, Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../../../shared/redux/setup/rootReducer'

const CHANGE_COUNT = 'count/CHANGE_COUNT'

interface SetToTwoAsync extends Action {
  type: 'count/CHANGE_COUNT'
  payload: number
}

export const setToOne = (): SetToTwoAsync => ({
  type: CHANGE_COUNT,
  payload: 1,
})

export const setToTwoAsync = (): ThunkAction<
  void,
  {},
  RootState,
  SetToTwoAsync
> => {
  return (dispatch: Dispatch<SetToTwoAsync>) => {
    return dispatch({
      type: CHANGE_COUNT,
      payload: 2,
    })
  }
}

export interface DispatchProps {
  setToOne: () => SetToTwoAsync
  setToTwoAsync: () => ThunkAction<void, {}, RootState, SetToTwoAsync>
}

export type ActionTypes = SetToTwoAsync

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
