import { GameDifficulty, GameType } from '../enums/game'
import { amountOfQuestionsPerGame } from '../constants/gameSettings'

function getGameDataUrl(
  type: GameType = GameType.Boolean,
  amount = amountOfQuestionsPerGame,
  difficulty: GameDifficulty = GameDifficulty.Hard
) {
  return `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`
}

export function fetchGameData() {
  return fetch(getGameDataUrl()).then((data) => data.json())
}
