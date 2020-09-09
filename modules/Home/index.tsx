import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import Home from './components/Home'
import * as countActions from './redux/count'
import { RootState, KnownActions } from '../../shared/redux/setup/rootReducer'

export const mapStateToProps = (state: RootState) => {
  return {
    count: state.count,
  }
}

export const mapDispatchToProps = (dispatch: Dispatch): KnownActions => {
  return bindActionCreators(
    {
      ...countActions,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
