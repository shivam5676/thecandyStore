import { useState } from "react";

const HeaderForm = (props) => {
  const [candy, setcandy] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const candyHandler = (event) => {
    setcandy(event.target.value);
  };
  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };
  const priceHandler = (event) => {
    setPrice(event.target.value);
  };
 const formData={
    id:Math.random(),
        candy:candy,
        details:description,
        price:+price
    }
  const InputDetailsHandler = (event) => {
    event.preventDefault();
   props.submitData(formData)
  };
  return (
    <form onSubmit={InputDetailsHandler}>
      <label>candy name</label>
      <input type="text" onChange={candyHandler} required></input>
      <label>description name</label>
      <input type="text" onChange={descriptionHandler} required></input>
      <label>price</label>
      <input type="number" onChange={priceHandler} required></input>
      <button>+Add candy</button>
    </form>
  );
};
export default HeaderForm;
