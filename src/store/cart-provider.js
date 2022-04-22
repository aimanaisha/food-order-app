import CartContext from "./cart-context";
import { useReducer } from "react";


const initialCartState = {
    items: [],
    totalAmount: 0
}

const cartReducerFn = (latestState, action) => {
    
    if (action.type==='ADD_ITEM'){

        const exixtingItemIndex = latestState.items.findIndex((item)=> item.id === action.item.id)

        const exixtingItem = latestState.items[exixtingItemIndex]

        
        let updatedItems;

        if(exixtingItem){
            const updatedItem = {
                ...exixtingItem,
                amount: exixtingItem.amount + action.item.amount
            }
            updatedItems = [...latestState.items]
            updatedItems[exixtingItemIndex] = updatedItem
        } 
        else {
            updatedItems = latestState.items.concat(action.item)
        }

        return{
            items: updatedItems,
            totalAmount: latestState.totalAmount + action.item.price * action.item.amount
        }        
    }
    if(action.type === 'REMOVE_ITEM'){

        const exixtingItemIndex = latestState.items.findIndex((item)=> item.id === action.id)

        const existingItem = latestState.items[exixtingItemIndex]

        const updatedTotalAmount = latestState.totalAmount - existingItem.price

        let updatedItems

        if(existingItem.amount === 1){
            updatedItems = latestState.items.filter(item => item.id !== action.id)
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
            updatedItems = [...latestState.items]
            updatedItems[exixtingItemIndex] = updatedItem
        }

        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount
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