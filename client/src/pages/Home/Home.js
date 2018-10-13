import React, { Component } from "react";
import Nav from "../../components/Nav";
import Modal from "../../components/Modals";
import API from "../../utils/API";


class Home extends Component {
    state = {
        workouts: []
    };

    componentDidMount() {
        this.loadWorkouts();
        console.log(this.state.workouts);
    }

    loadWorkouts = () => {
        API.getWorkouts()
        .then(res =>
            this.setState({ workouts: res.data })
            )
            .catch(err => console.log(err));
            console.log(this.state.workouts);
    };


    render() {
        return (
            <div>
                <Nav />
                <Modal 
                    workout={this.state.workout} 
                    routine={this.state.routine} 
                />
            </div>
        );
    }
}

export default Home;