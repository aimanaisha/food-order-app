import React, { useContext } from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}   //All this data isnt actually used,
})                           // its just used to provide autocompletion

export default CartContext  