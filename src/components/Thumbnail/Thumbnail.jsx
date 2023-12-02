import styles from './Thumbnail.module.css'

export default function Thumbnail({ id, src, selectImg, isSelected }) {
    return (
        <div 
          className={styles.thumbnail_container}
          data-selected={isSelected}
          onClick={() => selectImg(id)}
        >
            <img src={src} alt="" />
        </div>
    )
}
