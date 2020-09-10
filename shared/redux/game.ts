import { Dispatch, Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { RootState } from './setup/rootReducer'
import { fetchGameData } from '../networking/game'
import { GameData, Question } from '../types/GameData'
import { navigate } from '../routerService'
import { Routes } from '../enums/routes'
import { amountOfQuestionsPerGame } from '../constants/gameSettings'

const START_NEW_GAME = 'game/START_NEW_GAME'
const ANSWER_QUESTION = 'game/ANSWER_QUESTION'

interface LoadDataAction extends Action {
  type: 'game/START_NEW_GAME'
  payload: Question[]
}

interface AnswerQuestionAction extends Action {
  type: 'game/ANSWER_QUESTION'
  payload: {
    questionIndex: number
    wasItCorrect: boolean
  }
}

type startNewGameReturnType = ThunkAction<void, {}, RootState, LoadDataAction>

export const startNewGame = (): startNewGameReturnType => {
  return (dispatch: Dispatch<LoadDataAction>) => {
    return fetchGameData().then((data: GameData) => {
      dispatch({
        type: START_NEW_GAME,
        payload: data.results,
      })

      navigate(Routes.MultipleOption, { questionIndex: 0 })
    })
  }
}

export const answerQuestion = (
  questionIndex: number,
  wasItCorrect: boolean
): AnswerQuestionAction => {
  if (questionIndex + 1 < amountOfQuestionsPerGame) {
    navigate(Routes.MultipleOption, { questionIndex: questionIndex + 1 })
  } else {
    navigate(Routes.Results)
  }

  return {
    type: ANSWER_QUESTION,
    payload: {
      questionIndex,
      wasItCorrect,
    },
  }
}

export interface DispatchProps {
  startNewGame: () => startNewGameReturnType
  answerQuestion: (
    questionIndex: number,
    wasItCorrect: boolean
  ) => AnswerQuestionAction
}

export type ActionTypes = LoadDataAction & AnswerQuestionAction

interface State {
  data: Question[]
  dataLoaded: boolean
  currentGameFinished: boolean
  answers: {
    [key: number]: boolean
  }
}

const initialState: State = {
  data: [],
  dataLoaded: false,
  currentGameFinished: false,
  answers: {},
}

export default function (state = initialState, action: ActionTypes): State {
  switch (action.type) {
    case START_NEW_GAME:
      return {
        ...state,
        data: action.payload,
      }

    case ANSWER_QUESTION:
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.questionIndex]: action.payload.wasItCorrect,
        },
      }

    default:
      return state
  }
}
