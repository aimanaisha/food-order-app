import classes from "./Cart.module.css";
import Modal from './Modal.js'
import { useContext } from "react";
import CartContext from "../store/cart-context";

const Cart = (props) => {

  const ctx = useContext(CartContext)

  const test = () =>{
    //console.log(ctx)
  }

  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`

  const hasItems = ctx.items.length > 0

  const cartItems = (
    <ul className={classes["cart-items"]}>

      {ctx.items.map((item) => {

      return <li>{item.amount}</li>

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

        <button onClick={test}>test</button>

        <button className={classes["button--alt"]} onClick={props.onHideCart}>Close</button>
        { hasItems && <button className={classes.button}>Order</button>}
      </div>

    </Modal>
  );
};

export default Cart;
