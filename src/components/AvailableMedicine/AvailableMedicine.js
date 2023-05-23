const AvailableMedicine = (props) => {
  console.log(props.items);
  const newArray = props.items.map((item) => {
    return (
      <div key={item.id}>
        
        <h3>{item.medicine}</h3>
        <p>Description: {item.details}</p>
        <p>Price: {item.price}</p>
      </div>
    );
  });
  return (
    <div>
      <h1>AvailableMedicine</h1>
      <h1>{newArray}</h1>
    </div>
  );
};
export default AvailableMedicine;
