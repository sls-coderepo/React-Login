import React, { Component } from 'react'
import TacoCard from "./TacoCard";
import APIManager from '../../modules/APIManager'

class TacoList extends Component {

    state = {
        tacos: []
    }
    componentDidMount() {
        APIManager.getAllTacos()
            .then((tacos) => {
                this.setState({
                    tacos: tacos
                })
            })
    }

    render() {



        return (
            <>
                {this.state.tacos.map(taco =>
                    <TacoCard key={taco.id} taco={taco} userId={this.props.userId} />
                )}
            </>
        )
    }
}
export default TacoList