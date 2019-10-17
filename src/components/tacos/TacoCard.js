import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'

class TacoCard extends Component {
    state = {

    }

    handleClick = () => {
        console.log("what are the props of this component", this.props)
        const newOrderObj = {
            userId: this.props.userId,
            tacoId: this.props.taco.id
        }
        APIManager.orderTaco(newOrderObj)
            .then(() => {
                this.props.getOrders();
                //call getOrders from the OrderView
            })
    }

    render() {

        return (
            <>
                <h2>{this.props.taco.name}</h2>
                <button type="button" onClick={this.handleClick}>Order Me</button>
            </>
        )
    }

}

export default TacoCard;