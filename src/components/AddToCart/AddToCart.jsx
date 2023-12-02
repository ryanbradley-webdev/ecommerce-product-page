import { useContext, useState } from 'react'
import CartIcon from '../../assets/CartIcon'
import styles from './AddToCart.module.css'
import { CartContext } from '../../contexts/CartContext'

export default function AddToCart() {
  const { addToCart } = useContext(CartContext)

  const [quantity, setQuantity] = useState(1)

  const decrementQty = () => {
    setQuantity(prev => (
      prev === 1 ? prev : prev - 1
    ))
  }

  const incrementQty = () => {
    setQuantity(prev => prev + 1)
  }

  const handleAddToCart = () => {
    addToCart(quantity)
    setQuantity(1)
  }

  return (
    <div
      className={styles.container}
    >
      
      <div
        className={styles.quantity_control}
      >

        <button
          className={styles.qty_btn}
          onClick={decrementQty}
          disabled={quantity === 1}
        >
          <img src='/icon-minus.svg' alt='lower quantity' />
        </button>

        <span>
          {quantity}
        </span>

        <button
          className={styles.qty_btn}
          onClick={incrementQty}
        >
          <img src='/icon-plus.svg' alt='increase quantity' />
        </button>

      </div>

      <button
        className={styles.cart_btn}
        onClick={handleAddToCart}
      >
        <CartIcon />

        <span>
          Add to cart
        </span>
      </button>

    </div>
  )
}
