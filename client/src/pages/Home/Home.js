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
    }

    loadWorkouts = () => {
        API.getWorkouts()
        .then(res => {
            this.setState({ workouts: res.data })
            console.log(res.data);
            console.log(this.state.workouts[0].routine);
        })
            .catch(err => console.log(err));
    };


    render() {
        return (
            <div>
                <Nav />
                {this.state.workouts.map(workout => (
                <Modal
                    key={workout.workout}
                    workout={workout.workout}
                    routine={workout.routine}
                    sets={workout.sets}
                    reps={workout.reps}
                />
            ))}
            </div>
        );
    }
}

export default Home;