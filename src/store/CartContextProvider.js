import cartContext from "./cartContext"
const CartContextProvider=(props)=>{
    const addItemHandler=()=>{}

    const cartcontextHelper={
        item:[],
        totalAmount:0,
        addItem:{addItemHandler}
    }
    return(
        <cartContext.Provider>{props.children} value={cartcontextHelper}</cartContext.Provider>
    )
}
export default CartContextProvider;