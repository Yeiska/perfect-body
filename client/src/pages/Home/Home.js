import React, { Component } from "react";
import Nav from "../../components/Nav";
import { Modals, ModalListItem } from "../../components/Modals";
import Header from "../../components/Header";
import API from "../../utils/API";

class Home extends Component {
    state = {
        workouts: [],
    };

    componentDidMount() {
        this.loadWorkouts()
    }

    loadWorkouts = () => {
        API.getWorkouts()
            .then(res => {
                this.setState({ workouts: res.data })
                console.log(res.data);
            })
            .catch(err => console.log(err));
    };

    // list = (x) => {
    //     let Arr1 = [];
    //     Arr1 = x.split(",")
    //     console.log(Arr1);
    //     return  Arr1.map(Arr2 => {
    //         console.log(Arr2);
    //         return Arr2;

    //     })

    // }



    render() {
        return (
            <div>
                <Nav />
                <Header />
                <div className="grid-container fluid">
                <div className="grid-x workouts">
                
                    {this.state.workouts.map(workout => {
                        console.log(workout)
                        const routines = workout.routine.split(",");
                        const sets = workout.sets.split(",");
                        const reps = workout.reps.split(",");
                        return (
                            <div className="small-12 large-6 cell">
                            <Modals
                                key={workout._id}
                                workout={workout.workout}
                            >
                                {routines.map((routine, i) => {
                                    return (
                                        <ModalListItem
                                            routine={routine}
                                            sets={sets[i]}
                                            reps={reps[i]}
                                        />
                                    )
                                })}
                            </Modals>
                            </div>
                        );
                    })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;