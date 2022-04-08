import classes from './MealsSummary.module.css'
import styles from './AvailableMeals.module.css'
import Card from './Card';
import style from './MealItem.module.css'
import class2 from './Form.module.css'
import Input from './Input.js'

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const Meals = () => {

    return(
        <>
            <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
        <Card>
        <section className={styles.meals}>
            <ul>
                {DUMMY_MEALS.map((meals)=>{
                    return(
                        <li className={style.meal}>
                            <div>
                                <h3>{meals.name}</h3>
                                <div className={style.description}>{meals.description}</div>
                            <div className={style.price}>{`$${meals.price.toFixed(2)}`}</div>
                            </div>
                            <div>
                                <form className={class2.form}>
                                    <Input label="Amount" input={{
                                        id: 'amount',
                                        type: 'number',
                                        min: '1',
                                        max: '5',
                                        step: '1',
                                        defaultValue: '1'
                                    }} />
                                    <button>+ Add</button>
                                </form>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
        </Card>
        </>
    )
}

export default Meals