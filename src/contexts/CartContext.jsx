import { createContext, useState } from "react"

export const CartContext = createContext()

export default function CartProvider({ children }) {
  const [quantity, setQuantity] = useState(0)

  const addToCart = (quantity) => {
    setQuantity(prev => prev + quantity)
  }

  const resetCart = () => {
    setQuantity(0)
  }

  const value = {
    quantity,
    addToCart,
    resetCart
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
