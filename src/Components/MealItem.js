import style from "./MealItem.module.css";
import CartContext from "../store/cart-context";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";

const MealItem = (props) => {

    const ctx = useContext(CartContext)

    const addToCartHandler = (amount) => {
        ctx.addItem({
          id: props.id,
          name: props.name,
          amount: amount,
          price: props.price
        })
    }
    
    return (
        <li className={style.meal}>

          <div>
            <h3>{props.name}</h3>
            <div className={style.description}>{props.description}</div>
            <div className={style.price}>{`$${props.price.toFixed(2)}`}</div>
          </div>

          <div>
            <MealItemForm id={props.id} addToCartHandler={addToCartHandler}/>
          </div>

        </li>
        
    );
}

export default MealItem