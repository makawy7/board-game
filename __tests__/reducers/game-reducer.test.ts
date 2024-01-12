import { Tile } from "@/models/title"
import gameReducer, { initialState } from "@/reducers/game-reducer"
import { act, renderHook } from "@testing-library/react"
import { useReducer } from "react"

describe('gameReducer', () => {
    describe('create_tile', () => {
        it('should create a new tile', () => {
            const tile: Tile = {
                position: [0, 0],
                value: 2
            }

            const { result } = renderHook(() => useReducer(gameReducer, initialState))
            const [, dispatach] = result.current

            act(() => dispatach({ type: 'create_tile', tile }))

            const [state,] = result.current

            expect(state.board[0][0]).toBeDefined()
            expect(Object.values(state.tiles)).toEqual([tile])
        })
    })
})