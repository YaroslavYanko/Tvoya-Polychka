import styles from './line-images.module.css'
import images from '../../../images/line2.jpg'

export const LineImages = () => {
  return (
    <div className={styles.line__images}>
        <img src={images} alt="" />
    </div>
  )
}
