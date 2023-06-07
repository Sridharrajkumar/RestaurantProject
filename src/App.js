import React,{Fragment, useState} from "react";
import Header from "./component/LayOut/Header";
import Cart from "./component/Cart/Cart";


function App() {
  const[CartShown , SetCartShown]=useState(false);

  const showCartHandler = () =>{
     SetCartShown(true);
  }

  const hideCartHandler = () =>{
    SetCartShown(false);
  }
  return (
    <Fragment>
     {CartShown && <Cart onClose={hideCartHandler}/>}
      <Header OnCartHandler={showCartHandler} />  
      
    </Fragment>
  );
}

export default App;
