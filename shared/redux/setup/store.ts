import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

export default function configureStore() {
  // middlewares, enhancers and redux magic will happen here.
  return createStore(rootReducer, applyMiddleware(thunk))
}
