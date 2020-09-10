import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import Results from './components/Results'
import * as gameActions from '../../shared/redux/game'
import { DispatchProps as GameDispatchProps } from '../../shared/redux/game'
import { RootState } from '../../shared/redux/setup/rootReducer'

export const mapStateToProps = (state: RootState) => {
  return {
    game: state.game,
  }
}

export const mapDispatchToProps = (dispatch: Dispatch): GameDispatchProps => {
  return bindActionCreators(
    {
      ...gameActions,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)
