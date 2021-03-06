import classes from "./MealsSummary.module.css";
import styles from "./AvailableMeals.module.css";
import Card from "../Card";
import MealItem from "./MealItem.js";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const Meals = () => {

   const dummyMeals = DUMMY_MEALS.map((meals) => {
      return(
     <MealItem 
       id={meals.id}
       key={meals.id}
       name={meals.name}
       description={meals.description}
       price={meals.price}
     />
      ) 
   })

  return (
    <>

      <section className={classes.summary}>

      
        <h2>Delicious Food, Delivered To You</h2>
        <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
        <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>

      </section>

    
        <section className={styles.meals}>
          <Card>
            <ul>{dummyMeals}</ul>
          </Card>
        </section>
      
    </>
  );
};

export default Meals;
