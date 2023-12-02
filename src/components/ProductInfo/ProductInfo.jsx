import AddToCart from "../AddToCart/AddToCart"
import styles from './ProductInfo.module.css'

export default function ProductInfo() {
    return (
        <section
          className={styles.product_info}
        >
            
            <h2>
              SNEAKER COMPANY
            </h2>

            <h1>
              Fall Limited Edition Sneakers
            </h1>

            <p>
              These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they&apos;ll withstand everything the weather can offer.
            </p>

            <div
              className={styles.price_container}
            >

              <div>

                <h3>
                  $125.00
                </h3>

                <span
                  className={styles.chip}
                >
                  50%
                </span>

              </div>

              <span>
                $250.00
              </span>

            </div>

            <AddToCart />
            
        </section>
    )
}
