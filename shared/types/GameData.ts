import { GameDifficulty, GameType } from '../enums/game'

export interface Question {
  type: GameType
  category: string
  question: string
  difficulty: GameDifficulty
  correct_answer: string
  incorrect_answers: string[]
}

export interface GameData {
  response_code: 0
  results: Question[]
}
