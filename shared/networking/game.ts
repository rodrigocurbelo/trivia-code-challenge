import { GameDifficulty, GameType } from '../enums/game'
import { amountOfQuestionsPerGame } from '../constants/gameSettings'

function getGameDataUrl(
  type: GameType = GameType.Boolean,
  amount = amountOfQuestionsPerGame,
  difficulty: GameDifficulty = GameDifficulty.Hard
) {
  return `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`
}

// We make sure that the rest of the app is fully agnostic to how we obtained
// the data.
export function fetchGameData(): Promise<any> {
  return fetch(getGameDataUrl()).then((data) => data.json())
}
