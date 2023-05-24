import { useReducer } from "react";
import cartContext from "./cartContext";
const defaultState = {
  items: [],
  totalAmount: 0,
};
const reducerfn = (state, action) => {
  if (action.type == "ADD") {
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.quantity;
    const updatedItems = [...state.items, action.item];

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  return defaultState;
};
const CartContextProvider = (props) => {
  const [state, dispatchfn] = useReducer(reducerfn, defaultState);
  const addItemHandler = (item) => {
    console.log(item);
    dispatchfn({
      type: "ADD",
      item: item,
    });
  };

  const cartcontextHelper = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemHandler,
  };
  console.log(cartcontextHelper);
  return (
    <cartContext.Provider value={cartcontextHelper}>
      {props.children}
    </cartContext.Provider>
  );
};
export default CartContextProvider;
