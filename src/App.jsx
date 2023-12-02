import Header from './components/Header/Header'
import ProductImages from './components/ProductImages/ProductImages'
import ProductInfo from './components/ProductInfo/ProductInfo'
import './App.css'
import { useState } from 'react'
import { useMediaQuery } from './hooks/useMediaQuery'
import LargePicture from './components/LargePicture/LargePicture'

function App() {
  const [largePictureVisible, setLargePictureVisible] = useState(true)
  const isMobile = useMediaQuery('(max-width: 480px)')

  const toggleImgPreview = () => {
    if (!isMobile) {
      setLargePictureVisible(!largePictureVisible)
    }
  }

  return (
    <>
      <Header />
      <main>
          <ProductImages toggleImgPreview={toggleImgPreview} />
          <ProductInfo />
      </main>
      {largePictureVisible && <LargePicture toggleImgPreview={toggleImgPreview} />}
    </>
  )
}

export default App
