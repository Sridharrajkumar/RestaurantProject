import React ,{Fragment} from "react";
import classes from './Header.module.css';
import mealsImage from '../../Assets/meals.jpg'; 
import HeaderCartButton from "./HeaderCartButton";
import MealsContent from "./MealsContent";

const Header = () =>{

    return(
        <Fragment>
            <div className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </div>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="lots of food"/>
                
            </div>
             <MealsContent />
            
            
        </Fragment>
    )

}

export default Header