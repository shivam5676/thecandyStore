import { useState } from "react";

const HeaderForm = (props) => {
  const [medicine, setMedicine] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const medicineHandler = (event) => {
    setMedicine(event.target.value);
  };
  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };
  const priceHandler = (event) => {
    setPrice(event.target.value);
  };
 const formData={
    id:Math.random(),
        medicine:medicine,
        details:description,
        price:+price
    }
  const InputDetailsHandler = (event) => {
    event.preventDefault();
   props.submitData(formData)
  };
  return (
    <form onSubmit={InputDetailsHandler}>
      <label>medicine name</label>
      <input type="text" onChange={medicineHandler}></input>
      <label>description name</label>
      <input type="text" onChange={descriptionHandler}></input>
      <label>price</label>
      <input type="text" onChange={priceHandler}></input>
      <button>+Add Medicine</button>
    </form>
  );
};
export default HeaderForm;
