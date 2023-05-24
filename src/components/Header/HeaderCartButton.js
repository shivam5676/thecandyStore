import { useContext } from "react"
import cartContext from "../../store/cartContext"

const HeaderCartButton=(props)=>{
    const ctx=useContext(cartContext);
    const badges=(ctx.items.length)

return (
    <button onClick={props.onClick}>
<span><b>cart </b> </span>
<span style={{backgroundColor:"red"}}><h3>{badges}</h3></span>

    </button>
)
}
export default HeaderCartButton