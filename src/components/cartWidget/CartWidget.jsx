import './cartWidget.css'
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Badge } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const{cartQuantity}= useContext(CartContext)
    return(
        <div className='cartWidgetConf'>
            {cartQuantity()> 0 && <Badge bg='danger '>{cartQuantity()}</Badge>}
            {cartQuantity() > 0 ?<PiShoppingCartSimpleFill color='black' className='iconPosition2 mb-4'/> :<PiShoppingCartSimpleFill color='black' className='iconPosition2 mb-1'/>}
        </div>
    )
}

export default CartWidget