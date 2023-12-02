import { useContext, useState, useRef } from "react"
import CartIcon from "../../assets/CartIcon"
import Logo from "../../assets/Logo"
import MenuIcon from '../../assets/MenuIcon'
import { useMediaQuery } from "../../hooks/useMediaQuery"
import styles from './Header.module.css'
import CloseIcon from "../../assets/CloseIcon"
import CartModal from "../CartModal/CartModal"
import { CartContext } from "../../contexts/CartContext"

export default function Header() {
  const { quantity } = useContext(CartContext)

  const isMobile = useMediaQuery('(max-width: 768px)')
  const [menuOpen, setMenuOpen] = useState(!isMobile)
  const [cartOpen, setCartOpen] = useState(false)

  const [display, setDisplay] = useState('none')
  const [left, setLeft] = useState()
  const [width, setWidth] = useState()

  const headerRef = useRef(null)
  const underlineRef = useRef(null)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const toggleCart = () => {
    setCartOpen(!cartOpen)
  }

  const highlight = e => {
    if (!isMobile) {
      const { x: headerX } = headerRef.current.getBoundingClientRect()
      const { x: linkX, width } = e.target.getBoundingClientRect()

      setDisplay('')
      setLeft(linkX - headerX)
      setWidth(width)
    }
  }

  const removeHighLight = () => {
    if (!isMobile) {
      setDisplay('none')
      setLeft(undefined)
      setWidth(undefined)
    }
  }

  return (
      <header
        className={styles.header}
        ref={headerRef}
      >
        <nav
          className={styles.nav}
        >
          {
            isMobile && (
              <button
                className={styles.menu_btn}
                onClick={toggleMenu}
              >
                <MenuIcon />
              </button>
            )
          }
          <Logo />
          <div
            className={styles.menu_container}
            style={{
              opacity: isMobile ? menuOpen ? '1' : '' : ''
            }}
          >

            <div
              className={styles.menu}
              style={{
                transform: isMobile ? menuOpen ? '' : 'translateX(-100%)' : ''
              }}
            >
              {
                isMobile && (
                  <button
                    className={styles.menu_btn}
                    onClick={() => setMenuOpen(false)}
                  >
                    <CloseIcon />
                  </button>
                )
              }
              <ul>
                <li onMouseEnter={highlight} onMouseLeave={removeHighLight}>Collections</li>
                <li onMouseEnter={highlight} onMouseLeave={removeHighLight}>Men</li>
                <li onMouseEnter={highlight} onMouseLeave={removeHighLight}>Women</li>
                <li onMouseEnter={highlight} onMouseLeave={removeHighLight}>About</li>
                <li onMouseEnter={highlight} onMouseLeave={removeHighLight}>Contact</li>
                <span
                  style={{
                    display,
                    left,
                    width
                  }}
                ></span>
              </ul>
            </div>

          </div>
        </nav>
        <div
          className={styles.cart_img}
        >
          
          <button
            className={styles.cart}
            onClick={toggleCart}
          >

            <CartIcon />

            {
              quantity > 0 && (
                <p
                  className={styles.qty}
                >
                  {quantity}
                </p>
              )
            }

          </button>

          <img src="image-avatar.png" alt="" />

        </div>

        {cartOpen && <CartModal />}

      </header>
    )
}
