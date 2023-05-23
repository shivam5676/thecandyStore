import { createContext } from "react"

const cartContext=createContext({
    item:[],
    totalAmount:0,
    addItem:(item)=>{}
});
export default cartContext;