import CartContext from "./cart-context";
import { useReducer } from "react";
import { act } from "react-dom/test-utils";

const initialCartState = {
    items: [],
    totalAmount: 0
}

const cartReducerFn = (latestState, action) => {
    if (action.type==='ADD_ITEM'){
        return{
            items: latestState.items.concat(action.item),
            totalAmount: latestState.totalAmount + action.item.price * action.item.amount
        }
    }
    if (action.type==='REMOVE_ITEM') {
        return {
            items:
            totalAmount
        }
    }
    if (action.type==='REMOVE_ITEM') {
        return {
            items:
            totalAmount
        }
    }
    return initialCartState
}

const CartProvider = (props) => {

    const [cartState, dispatchAction] = useReducer(cartReducerFn, initialCartState)

    const addItemToCartHandler = (item) => {
        dispatchAction({type: 'ADD_ITEM', item: item,})
    }

    const removeItemFromCartHandler = (id) => {
        dispatchAction({type: 'REMOVE_ITEM', id: id,})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler 
    }

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider