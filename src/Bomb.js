// your Bomb code here!
import React, { Component } from 'react';
import ImageSlider from './ImageSlider'



export default class Bomb extends Component {

    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    // generateBoom = () => {
    //     if (this.state.secondsLeft > 0) {
    //         return <h4>{this.state.secondsLeft} seconds before I go boom!</h4>
    //     }  else {
    //         return <h1>Boom!</h1>

    //     }
    // }


    render() {
        return (
            <div>
                <p>{this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`}</p>
            </div>
        )
    }

}


// React a library of classes. Component is one of those classes. When we call constructor, we are basically overiding or replacing the functions with out our own function that we will create. But, we want to use the functions from the Component, so in order to do that, we call super().