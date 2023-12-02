import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import styles from './CartModal.module.css'

export default function CartModal() {
  const { quantity, resetCart } = useContext(CartContext)

  return (
    <div
      className={styles.modal}
    >
      
      <h4>
        Cart
      </h4>

      <hr />

      {
        quantity === 0 ? (
          <div
            className={styles.empty}
          >
            <p>
              Your cart is empty.
            </p>
          </div>
        ) : (
          <div
            className={styles.product_container}
          >
            
            <div
              className={styles.product}
            >

              <img src="/image-product-1-thumbnail.jpg" alt="" />

              <div>

                <p>
                  Fall Limited Edition Sneakers
                </p>

                <p>
                  $125.00 x {quantity} <strong>${125 * quantity + '.00'}</strong>
                </p>

              </div>

              <button
                onClick={resetCart}
                className={styles.delete_btn}
              >
                <img src="/icon-delete.svg" alt="" />
              </button>

            </div>

            <button
              className={styles.checkout_btn}
            >
              Checkout
            </button>

          </div>
        )
      }

    </div>
  )
}
