import React, {Component} from 'react'


class OrderCard extends Component {
    state = {

    }

    render(){
        return (
            <>
           <h1>Order Card</h1>
           <p>{this.props.order.id}</p>
           <p>{this.props.order.taco.name}</p>
            </>
        )
    }
}

export default OrderCard