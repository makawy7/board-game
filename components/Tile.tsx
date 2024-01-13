import styles from '@/styles/tile.module.css'
import { Tile as TileProps } from '@/models/tile'
import { titleCountPerDimention, containerWidth } from '@/constants'

const Tile = ({ position, value }: TileProps) => {
  const positionToPixels = (position: number) => {
    return (position / titleCountPerDimention) * containerWidth
  }

  const style = {
    left: positionToPixels(position[0]),
    top: positionToPixels(position[1]),
  }
  return (
    <div className={styles.tile} style={style}>
      {value}
    </div>
  )
}

export default Tile
