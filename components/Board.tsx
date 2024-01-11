import styles from '@/styles/board.module.css'
import Tile from './Tile'

const Board = () => {
  const renderGrid = () => {
    const cells: JSX.Element[] = []
    const totalCellsCount = 16

    for (let index = 0; index < totalCellsCount; index++) {
      cells.push(<div key={index} className={styles.cell}></div>)
    }
    return cells
  }
  return (
    <div className={styles.board}>
      <div className={styles.tiles}>
        <Tile />
      </div>
      <div className={styles.grid}>{renderGrid()}T</div>
    </div>
  )
}

export default Board
