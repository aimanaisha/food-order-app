import Input from '../Input.js'
import { useRef, useState } from 'react';
import class2 from './Form.module.css'

const MealItemForm = (props) => {

    const [isValid, setIsValid] = useState(true)
  
    const amountInputRef = useRef();

    const submitHandler = (e) => {
    
        e.preventDefault()  
        const enteredAmount = amountInputRef.current.value // reads the input value         #################33333    
        const enteredAmountNo = +enteredAmount   //converts string to number
    
        if (enteredAmount.trim().length===0 || enteredAmountNo<1 || enteredAmountNo>5){
          setIsValid(false)
        }
        props.addToCartHandler(enteredAmountNo)
      }

    return(
        <form className={class2.form} onSubmit={submitHandler}>

              <Input 
                ref={amountInputRef} 
                label="Amount" 
                input={{
                  id: "amount_" + props.id,
                  type: "number",
                  min: "1",
                  max: "5",
                  step: "1",
                  defaultValue: "1",
                }}
              />

              <button>+ Add</button>

              {!isValid && <p>Amount should be from 1 to 5</p>}

        </form>
    )

}

export default MealItemForm