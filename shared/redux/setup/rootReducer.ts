import { combineReducers } from 'redux'

import count, {
  DispatchProps as CountDispatchProps,
} from '../../../components/Home/redux/count'

const rootReducer = combineReducers({
  count,
})

export type RootState = ReturnType<typeof rootReducer>
export type KnownActions = CountDispatchProps

export default rootReducer
