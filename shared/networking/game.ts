import { GameDifficulty, GameType } from '../enums/game'
import { amountOfQuestionsPerGame } from '../constants/gameSettings'
import { GameData } from '../types/GameData'

function getGameDataUrl(
  type: GameType = GameType.Boolean,
  amount = amountOfQuestionsPerGame,
  difficulty: GameDifficulty = GameDifficulty.Hard
) {
  return `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`
}

// We make sure that the rest of the app is fully agnostic to how we obtained
// the data.
export function fetchGameData(): Promise<GameData> {
  return new Promise((res, rej) => {
    try {
      fetch(getGameDataUrl(), {
        // We want it to display an error if it wasn't able to fetch the data.
        cache: 'no-cache',
      })
        .then((data) => {
          if (data.ok) {
            return res(data.json())
          } else {
            return rej(data.status)
          }
        })
        .catch(rej)
    } catch {
      rej()
    }
  })
}
