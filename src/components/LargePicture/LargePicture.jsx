import { useState } from 'react'
import Thumbnail from '../Thumbnail/Thumbnail'
import PrevIcon from '../../assets/PrevIcon'
import NextIcon from '../../assets/NextIcon'
import styles from './LargePicture.module.css'
import CloseIcon from '../../assets/CloseIcon'

export default function LargePicture({
  toggleImgPreview
}) {
  const [selectedImgIndex, setSlectedImgIndex] = useState(0)

  const incrementImg = () => {
    setSlectedImgIndex(prev => (
      prev === thumbnails.length - 1 ? prev : prev + 1
    ))
  }

  const decrementImg = () => {
    setSlectedImgIndex(prev => (
      prev === 0 ? prev : prev - 1
    ))
  }

  return (
    <aside
      className={styles.container}
    >
      
      <div
        className={styles.img_container}
      >

        <button
          className={styles.close_btn}
          onClick={toggleImgPreview}
        >
          <CloseIcon />
        </button>
        
        <button
          className={styles.nav_btn}
          onClick={decrementImg}
          data-type='Prev'
        >
          <PrevIcon />
        </button>

        <img
          src={images[selectedImgIndex]} 
          alt=""
          className={styles.selected_img}
        />
        
        <div className={styles.thumbnails}>
          {thumbnails.map((thumbnail, index) => (
            <Thumbnail 
                key={index} 
                id={index} 
                src={thumbnail} 
                selectImg={() => setSlectedImgIndex(index)} 
                isSelected={selectedImgIndex === index}
            />
          ))}
        </div>

        <button
          className={styles.nav_btn}
          onClick={incrementImg}
          data-type='Next'
        >
          <NextIcon />
        </button>

      </div>

    </aside>
  )
}

const thumbnails = [
  '/image-product-1-thumbnail.jpg',
  '/image-product-2-thumbnail.jpg',
  '/image-product-3-thumbnail.jpg',
  '/image-product-4-thumbnail.jpg'
]

const images = [
  '/image-product-1.jpg',
  '/image-product-2.jpg',
  '/image-product-3.jpg',
  '/image-product-4.jpg'
]
