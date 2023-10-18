import { CartContext } from "../context/CartContext";

export function CartContextProvider({ children }) {

    const values = {}

    return (
        <CartContext.Provider values={values}>
            {children}
        </CartContext.Provider>
    )
}