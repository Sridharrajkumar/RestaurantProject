import React from "react";
import classes from './MealsContent.module.css'

const MealsContent = () =>{
    return(
        <section className={classes.content}>
            <h2>Delicious Food,Delivered To You</h2>
            <p>Choose your favorite meal from our broad selection of avaliable
                 meals and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked with high-quality ingredient, just-in-time
                and of course by experienced chefs!
            </p>
        </section>
    )
}

export default MealsContent;