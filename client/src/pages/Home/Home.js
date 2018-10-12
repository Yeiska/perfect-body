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
        console.log()
    }

    loadWorkouts = () => {
        API.getWorkouts()
        .then(res =>
            this.setState({ workout: res.data })
            )
            .catch(err => console.log(err));
            console.log(this.state.workout);
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