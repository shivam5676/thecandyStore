import HeaderCartButton from "./HeaderCartButton"

const Header=(props)=>{
const cartOpenHandler=()=>{
    props.onOpenCart();
}
    return(
        <div>
            <div><h2>The candy Store</h2></div>
         
           <HeaderCartButton onClick={cartOpenHandler}></HeaderCartButton>
        </div>
        
    ) 
}
export default Header