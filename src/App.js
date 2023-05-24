import { useState } from "react";
import CartContextProvider from "./store/CartContextProvider";
import AvailableMedicine from "./components/AvailableMedicine/AvailableCandy";
import Header from "./components/Header/Header";
import HeaderForm from "./components/Header/HeaderForm";
import Cart from "./components/cart/Cart";
import AvailableCandy from "./components/AvailableMedicine/AvailableCandy";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const cartCloseHandler = () => {
    setCartIsOpen(false);
    console.log("false");
  };
  const cartOpenHandler=()=>{
    setCartIsOpen(true);
  }
  const [medArray, setMedArray] = useState([]);
  const FormDataHandler = (recievedata) => {
    setMedArray((prev) => [...prev, recievedata]);
  };
  return (
    <CartContextProvider>
      {cartIsOpen?<Cart onClose={cartCloseHandler}></Cart>:""}
      
      <Header onOpenCart={cartOpenHandler}></Header>

      <HeaderForm submitData={FormDataHandler}></HeaderForm>
      
      <AvailableCandy items={medArray}></AvailableCandy>
    </CartContextProvider>
  );
}

export default App;
