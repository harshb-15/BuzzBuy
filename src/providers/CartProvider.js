import React, { createContext, useContext, useState } from 'react';
import { useData } from './DataProvider';
const CartContext = createContext();

function CartProvider({ children }) {
    const { getItemFromId } = useData();
    const [cart, setCart] = useState({
        items: [
            { id: 1, quantity: 2, itemTotal: 219.9 },
            { id: 2, quantity: 1, itemTotal: 22.3 },
        ],
        cartTotal: 219.9 + 22.3,
    });
    function checkItemInCart(itemId) {
        let foundInCart = -1;
        const cartLength = cart['items'].length;
        for (var i = 0; i < cartLength; i++) {
            if (cart['items'][i]['id'] === itemId) {
                foundInCart = i;
                break;
            }
        }
        return foundInCart;
    }
    function addItemToCart(itemId, quantity = 1) {
        let newCart = { ...cart };
        const itemFromData = getItemFromId(itemId);
        let foundInCart = checkItemInCart(itemId);
        console.log(foundInCart);
        let previousItemTotal = 0;
        if (foundInCart === -1) {
            newCart['items'].push({
                id: itemId,
                quantity,
                itemTotal: quantity * itemFromData['price'],
            });
        } else {
            let cartItem = newCart['items'][foundInCart];
            previousItemTotal = cartItem['itemTotal'];
            cartItem['quantity'] = quantity;
            cartItem['itemTotal'] = quantity * itemFromData['price'];
        }
        newCart['cartTotal'] +=
            quantity * itemFromData['price'] - previousItemTotal;
        newCart['cartTotal'] =
            Math.round((newCart['cartTotal'] + Number.EPSILON) * 100) / 100;
        setCart(newCart);
        console.log(newCart);
    }
    return (
        <CartContext.Provider value={{ cart, addItemToCart }}>
            {children}
        </CartContext.Provider>
    );
}
export const useCart = () => useContext(CartContext);
export default CartProvider;
