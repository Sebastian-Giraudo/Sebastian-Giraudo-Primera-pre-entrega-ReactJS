import { FaCartArrowDown } from "react-icons/fa6";


const CartWidget = () => {
    return (
        <div className="cartwidget">
            <FaCartArrowDown size={30}/>
            <p>0</p>
        </div>
    )
}

export default CartWidget