import React, { Component } from "react";
import Nav from "../components/Nav";
import Modal from "../components/Modals";


class Home extends Component {
    state = {
        workout: ["PullWorkout1", "PullWorkout2"],
        routine: ["pull-ups", "Pull-downs"]
    };


    render() {
        return (
            <div>
                <Nav />
                <Modal workout={this.state.workout} routine={this.state.routine} />
            </div>
        );
    }
}

export default Home;