import AvailablecandyPrint from "./AvailablecandyPrint";


const AvailableCandy = (props) => {
  console.log(props.items);
  // const newArray = props.items.map((item) => {
  //   return (
  //     <div key={item.id}>
  //       <h1>{item.id}</h1>
  //       <h3>{item.medicine}</h3>
  //       <p>Description: {item.details}</p>
  //       <p>Price: {item.price}</p>
  //     </div>
  //   );
  // });
  return (
    <div>
      <h1>AvailableCandy</h1>
      {props.items.map((item) => {
        return (
          <AvailablecandyPrint
            id={item.id}
            key={item.id}
            candy={item.candy}
            price={item.price}
            details={item.details}
          ></AvailablecandyPrint>
        );
      })}
    </div>
  );
};
export default AvailableCandy;
