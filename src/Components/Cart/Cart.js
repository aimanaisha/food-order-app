import classes from "./Cart.module.css";
import Modal from '../Modal.js'
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from './CartItem.js'

const Cart = (props) => {

  const ctx = useContext(CartContext)

  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`

  const hasItems = ctx.items.length > 0

  const cartItemAddHandler = (id) => {}

  const cartItemRemoveHandler = (item) => {}

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((eachitem) => {     
        return (
        <CartItem 
          amount={eachitem.amount}
          key={eachitem.key} 
          name={eachitem.name} 
          price={eachitem.price}
          onAdd={cartItemAddHandler.bind(null, eachitem)}
          onRemove={cartItemRemoveHandler.bind(null, eachitem.id)}
        />)
      })}      
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>

      <div>{cartItems}</div>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={classes.actions}>

        <button className={classes["button--alt"]} onClick={props.onHideCart}>Close</button>
        { hasItems && <button className={classes.button}>Order</button>}
      </div>

    </Modal>
  );
};

export default Cart;
