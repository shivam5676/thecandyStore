import { useContext, useState } from "react";
import cartContext from "../../store/cartContext";

const AvailablecandyPrint = (props) => {
  const ctx = useContext(cartContext);

  

  const quantityHandlerbtn1 = (event) => {
    event.preventDefault();
  
    const cartData = {
      key: props.id,
      candy: props.candy,
      price: props.price,
      quantity: +1
    };
    ctx.addItem(cartData);
  };
  const quantityHandlerbtn2 = (event) => {
    event.preventDefault();
    
    const cartData = {
      key: props.id,
      candy: props.candy,
      price: props.price,
      quantity: +2,
    };
    ctx.addItem(cartData);
  };
  const quantityHandlerbtn3 = (event) => {
    event.preventDefault();
  
    const cartData = {
      key: props.id,
      candy: props.candy,
      price: props.price,
      quantity: +3,
    };
    ctx.addItem(cartData);
  };
  // const cartValueHandler = (event) => {
  //   event.preventDefault();
  //   const cartData = {
  //     key: props.id,
  //     candy: props.candy,
  //     price: props.price,
  //     quantity: +Quantity,
  //   };
  //   ctx.addItem(cartData);
  // };

  return (
    <form>
      <div>
        <h3>candy name</h3>
        {props.candy}
      </div>
      <div>
        <h3>price</h3>
        {props.price}
      </div>
      <div>
        <h3>uses</h3>
        {props.details}
      </div>
      <label>quantity</label>

      <button onClick={quantityHandlerbtn1}>ADD 1</button>
      <button onClick={quantityHandlerbtn2}>ADD 2</button>
      <button onClick={quantityHandlerbtn3}>ADD 3</button>
      {/* <input
        onChange={quantityHandler}
        min="1"
        max="10"
        type="number"
        defaultValue={1}
      ></input> */}
      {/* <button onClick={cartValueHandler}>+add to cart</button> */}
    </form>
  );
};
export default AvailablecandyPrint;
