import React, {Component} from 'react'
import OrderCard from '../orders/OrderCard'

class OrderList extends Component {
    state = {

    }

    render(){
        return (
            <>
             <p>Recent orders for userEmail </p>
            <OrderCard/>
           
            </>
        )
    }
}

export default OrderList