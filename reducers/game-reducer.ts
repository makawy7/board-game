import { Tile } from "@/models/title"
import { uid } from "uid";

type State = { board: String[][]; tiles: { [id: string]: Tile } }
type Action = {
    type: 'create_tile'; tile: Tile
}

const createBoard = (titleCountPerDimention: number = 4) => {
    const board: string[][] = []

    for (let i = 0; i < titleCountPerDimention; i++) {
        board[i] = new Array(titleCountPerDimention).fill(undefined)
    }

    return board
}

export const initialState: State = { board: createBoard(), tiles: {} }

const gameReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case 'create_tile': {
            const tileId = uid()
            const [x, y] = action.tile.position
            const newBoard = JSON.parse(JSON.stringify(state.board))
            newBoard[y][x] = tileId;

            return {
                ...state,
                board: newBoard,
                tiles: {
                    ...state.tiles,
                    [tileId]: action.tile
                }
            }
        }
        default:
            return state;
    }

}

export default gameReducer