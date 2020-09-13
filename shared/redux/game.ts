import { Dispatch, Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { RootState } from './setup/rootReducer'
import { fetchGameData } from '../networking/game'
import { GameData, Question } from '../types/GameData'
import { navigate } from '../routerService'
import { Routes } from '../enums/routes'

const SET_NETWORK_ERROR = 'game/SET_NETWORK_ERROR'
const START_NEW_GAME = 'game/START_NEW_GAME'
const ANSWER_QUESTION = 'game/ANSWER_QUESTION'
const ATTEMPT_TO_FETCH_DATA = 'game/ATTEMPT_TO_FETCH_DATA'

interface SetNetworkError extends Action {
  type: 'game/SET_NETWORK_ERROR'
}

interface LoadDataAction extends Action {
  type: 'game/START_NEW_GAME'
  payload: Question[]
}

interface AttemptToFetchData extends Action {
  type: 'game/ATTEMPT_TO_FETCH_DATA'
}

interface AnswerQuestionAction extends Action {
  type: 'game/ANSWER_QUESTION'
  payload: {
    answer: string
    questionIndex: number
  }
}

type startNewGameReturnType = ThunkAction<
  void,
  {},
  RootState,
  LoadDataAction | AttemptToFetchData
>

export const startNewGame = (): startNewGameReturnType => {
  return (
    dispatch: Dispatch<LoadDataAction | AttemptToFetchData | SetNetworkError>
  ) => {
    dispatch({
      type: ATTEMPT_TO_FETCH_DATA,
    })

    return fetchGameData().then(
      (data: GameData) => {
        dispatch({
          type: START_NEW_GAME,
          payload: data.results,
        })

        navigate(Routes.MultipleOption, { questionIndex: 0 })
      },
      () => {
        navigate(Routes.NoInternet)
        dispatch({
          type: SET_NETWORK_ERROR,
        })
      }
    )
  }
}

export const answerQuestion = (
  questionIndex: number,
  answer: string
): AnswerQuestionAction => {
  return {
    type: ANSWER_QUESTION,
    payload: {
      answer,
      questionIndex,
    },
  }
}

export interface DispatchProps {
  startNewGame: () => startNewGameReturnType
  answerQuestion: (
    questionIndex: number,
    answer: string
  ) => AnswerQuestionAction
}

export type ActionTypes = LoadDataAction &
  AnswerQuestionAction &
  SetNetworkError

interface State {
  data: Question[]
  stillFetchingData: boolean
  currentGameFinished: boolean
  answers: {
    [key: number]: string
  }
}

const initialState: State = {
  data: [],
  answers: {},
  stillFetchingData: false,
  currentGameFinished: false,
}

export default function (state = initialState, action: ActionTypes): State {
  switch (action.type) {
    case ATTEMPT_TO_FETCH_DATA:
      return {
        ...state,
        stillFetchingData: true,
      }

    case START_NEW_GAME:
      return {
        ...initialState,
        data: action.payload,
        stillFetchingData: false,
      }

    case ANSWER_QUESTION:
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.questionIndex]: action.payload.answer,
        },
      }

    case SET_NETWORK_ERROR:
      return {
        ...state,
        stillFetchingData: false,
      }

    default:
      return state
  }
}
