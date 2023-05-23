import { useState } from "react";
import CartContextProvider from "./store/CartContextProvider";
import AvailableMedicine from "./components/AvailableMedicine/AvailableMedicine";
import Header from "./components/Header/Header";
import HeaderForm from "./components/Header/HeaderForm";

function App() {
  const [medArray, setMedArray] = useState([{}]);
  const FormDataHandler = (recievedata) => {
    setMedArray((prev) => [...prev, recievedata]);
  };
  return (
    <CartContextProvider>
      <Header></Header>

      <header className="App-header">
        <HeaderForm submitData={FormDataHandler}></HeaderForm>
        <AvailableMedicine items={medArray}></AvailableMedicine>
      </header>
    </CartContextProvider>
  );
}

export default App;
