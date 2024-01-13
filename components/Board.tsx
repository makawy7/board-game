import styles from '@/styles/board.module.css'
import Tile from './Tile'
import { useEffect, useReducer, useRef } from 'react'
import gameReducer, { initialState } from '@/reducers/game-reducer'

const Board = () => {
  const [gameState, dispatch] = useReducer(gameReducer, initialState)
  const intialized = useRef(false)

  const renderGrid = () => {
    const cells: JSX.Element[] = []
    const totalCellsCount = 16

    for (let index = 0; index < totalCellsCount; index++) {
      cells.push(<div key={index} className={styles.cell}></div>)
    }
    return cells
  }

  const rederTiles = () => {
    return Object.values(gameState.tiles).map((tile, index) => {
      return <Tile {...tile} key={index} />
    })
  }

  useEffect(() => {
    if (intialized.current === false) {
      dispatch({ type: 'create_tile', tile: { position: [0, 1], value: 2 } })
      dispatch({ type: 'create_tile', tile: { position: [0, 2], value: 2 } })
    }
  }, [])

  return (
    <div className={styles.board}>
      <div className={styles.tiles}>{rederTiles()}</div>
      <div className={styles.grid}>{renderGrid()}</div>
    </div>
  )
}

export default Board
