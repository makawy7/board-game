import { Tile } from '@/models/tile'
import { uid } from 'uid'

const createBoard = (titleCountPerDimention = 4) => {
  const board = []

  for (let i = 0; i < titleCountPerDimention; i++) {
    board[i] = new Array(titleCountPerDimention).fill(undefined)
  }

  return board
}

const initialState = { board: createBoard(), tiles: {} }

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'create_tile': {
      const tileId = uid()
      const [x, y] = action.tile.position
      const newBoard = JSON.parse(JSON.stringify(state.board))
      newBoard[y][x] = tileId

      return {
        ...state,
        board: newBoard,
        tiles: {
          ...state.tiles,
          [tileId]: action.tile,
        },
      }
    }
    default:
      return state
  }
}

export default gameReducer
