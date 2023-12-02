import { useState } from "react"
import Thumbnail from "../Thumbnail/Thumbnail"
import styles from './ProductImages.module.css'
import { useMediaQuery } from "../../hooks/useMediaQuery"
import PrevIcon from '../../assets/PrevIcon'
import NextIcon from '../../assets/NextIcon'

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

export default function ProductImages({
  toggleImgPreview
}) {
    const [selectedImgIndex, setSlectedImgIndex] = useState(0)
    const isMobile = useMediaQuery('(max-width: 480px)')

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
        <section className={styles.product_images}>

            {
              isMobile && (
                <button
                  className={styles.nav_btn}
                  onClick={decrementImg}
                >
                  <PrevIcon />
                </button>
              )
            }

            <img
              src={images[selectedImgIndex]} 
              alt=""
              className={styles.selected_img}
              onClick={isMobile ? undefined : toggleImgPreview}
            />
            
            {
              !isMobile && (
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
              )
            }

            {
              isMobile && (
                <button
                  className={styles.nav_btn}
                  onClick={incrementImg}
                >
                  <NextIcon />
                </button>
              )
            }

        </section>
    )
}
