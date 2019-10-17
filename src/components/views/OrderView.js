import React, { Component } from 'react'
import TacoList from "../tacos/TacoList";
import OrderList from "../orders/OrderList";
import APIManager from '../../modules/APIManager';

class OrderView extends Component {
    state = {
        orders: []
    }

    getOrders = () => {
        APIManager.getAllOrders(this.props.userId)
            .then((results) => {
                console.log(results)
                this.setState({
                    orders: results
                })
            })
    }

    componentDidMount() {
        this.getOrders();
    }

    render() {

        return (
            <>
                <TacoList userId={this.props.userId} getOrders={this.getOrders} />
                <hr />
                <OrderList orders={this.state.orders} />
            </>
        )
    }

}

export default OrderView;