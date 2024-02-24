import './cartWidget.css'
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Badge } from 'react-bootstrap';

const CartWidget = ({counter}) => {
    return(
        <div className='cartWidgetConf'>
            <Badge bg='danger mb-5'>{counter}</Badge>
            <PiShoppingCartSimpleFill className='iconPosition2'/>
        </div>
    )
}

export default CartWidget