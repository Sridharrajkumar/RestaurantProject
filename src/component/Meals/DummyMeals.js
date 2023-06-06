import React from "react";
import classes from "./DummyMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const Dummy=[
    {
        id:"m1",
        title:"Sushi",
        description:"Finest fish and veggies",
        price:22.50
    },
    {
        id:"m2",
        title:"Schnitzel",
        description:"A german specialty",
        price:16.50
    },
    {
        id:"m3",
        title:"Barbecue Burger",
        description:"American,raw,meaty",
        price:12.50
    },
    {
        id:"m4",
        title:"Green Bowl",
        description:"Healthy...and green...",
        price:10.50
    }

]

const DummyMeals =() =>{
    const mealsList=Dummy.map((meal) => 
    <MealItem 
    key={meal.id} 
    name={meal.title} 
    description={meal.description} 
    price={meal.price}/>
    );

    return (
        <div className={classes.meal}>
            <Card >
            <ul>{mealsList}</ul>
            </Card>
        </div>
    )
}

export default DummyMeals;