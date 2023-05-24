import { useContext } from "react";
import cartContext from "../../store/cartContext";

const Cart = (props) => {
  const ctx = useContext(cartContext);
  const totalAmounts = `$${ctx.totalAmount.toFixed(2)}`;
  const cartCloseHandler = () => {
    props.onClose();
  };
  const newArray = ctx.items.map((item) => (
    <div key={item.id} style={{ backgroundColor: "yellowgreen" }}>
      <b>{item.candy}</b>
      <b style={{textAlign:"center"}}>X{item.quantity}</b>
    </div>
  ));
  return (
    <div>
        <span>{newArray}</span>
      
      <span style={{ backgroundColor: "yellow", textAlign: "center" }}>
        <b>ToTal Amount: {totalAmounts}</b>

        <button onClick={cartCloseHandler}>Close Cart</button>
      </span>
    </div>
  );
};
export default Cart;
