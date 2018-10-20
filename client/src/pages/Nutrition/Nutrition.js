import React, { Component } from "react";
import Nav from "../../components/Nav";
import { HeaderNutrition } from "../../components/Header";
import Form from "../../components/Form";
import Button from "../../components/Button";
import MacroDisplay from "../../components/MacroDisplay";

class Nutrition extends Component {
    state = {
        BodyWeight: "",
        ActivityLevel: "",
        proteinCalc: "",
        fatCalc: "",
        calories: "",
        protein: "",
        fat: "",
        carbs: "",
        message: "",
        calculating: ""
    };

    componentDidMount() {
        this.setState({ BodyWeight: "", ActivityLevel: "", proteinCalc: "", fatCalc: ""})
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

      MacroCalculation = () => {
        if (this.state.BodyWeight && this.state.ActivityLevel && this.state.proteinCalc && this.state.fatCalc) {
          const calorieDef = (parseInt(this.state.BodyWeight) * parseInt(this.state.ActivityLevel)) - 500;
          const dailyProtein = parseInt(this.state.BodyWeight) * parseFloat(this.state.proteinCalc);
          const dailyFat = parseInt(this.state.BodyWeight) * parseFloat(this.state.fatCalc);
          const dailyCarbs = parseInt(calorieDef) - (parseInt(dailyProtein * 4) + (parseInt(dailyFat * 9)));
          const carbGrams = parseInt(dailyCarbs) / 4;

              this.setState({ calories: parseInt(calorieDef), protein: parseInt(dailyProtein), fat: parseInt(dailyFat), carbs: parseInt(carbGrams), calculating: `Calculating Macros...`}, function() {
                if (this.state.calories && this.state.protein && this.state.fat && this.state.carbs) {
                    this.setState({ message: 
                      `Your daily Calorie total is: ${this.state.calories}
                       Macro Breakdown:
                       Protein = ${this.state.protein}g's
                       Fat = ${this.state.fat}g's
                       Carbs = ${this.state.carbs}g's`, calculating: "" });
                }
              }
              );

        }else{
            alert("Make sure you filled all required fields to find out your Macros!!")
        }
      };

     
      handleFormSubmit = event => {
          event.preventDefault();
          this.MacroCalculation();
      };


    render() {
        return (
            <div>
                <Nav />
                <HeaderNutrition />
                <fieldset className="fieldset">
                    <legend>Macros</legend>
                    <form>
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <Form
                                    label="BodyWeight in lbs."
                                    type="number"
                                    placeholder="Enter Weight (Required)"
                                    name="BodyWeight"
                                    //value={this.state.BodyWeight}
                                    onChange={this.handleInputChange}
                                />
                                <Form
                                    label="Activity Level"
                                    type="number"
                                    placeholder="14 - 16 (required)"
                                    id="activityLevel"
                                    name="ActivityLevel"
                                    help="Enter your activity level here. 14 being little to no activity / desk job. 16 being highly active always moving."
                                    onChange={this.handleInputChange}
                                   // value={this.state.ActivityLevel}
                                />
                                <Form
                                    label="Protein Calculator"
                                    type="number"
                                    placeholder=".75 - 1.25 (required)"
                                    id="proteinCalculator"
                                    name="proteinCalc"
                                    help="Here we determine your protein. Enter .75 if you are newer to training / overweight. 1 if you're slightly in shape and been training for a little. 1.25 if you are a bodybuilder."
                                    onChange={this.handleInputChange}
                                  //  value={this.state.proteinCalc}
                                />
                                <Form
                                    label="Fat Calculator"
                                    type="number"
                                    placeholder=".3 - .4 (required)"
                                    id="fatCalculator"
                                    name="fatCalc"
                                    help="Pick between .3 - .4, .3 being you prefer more carbs i.e(Rice,Bread,Pasta) and .4 being you prefer more fats i.e(nuts,oil,butters) "
                                    onChange={this.handleInputChange}
                                  //  value={this.state.fatCalc}
                                />
                                <Button
                                    className="button success"
                                    onClick={this.handleFormSubmit}
                                  //  disabled={!(this.state.BodyWeight && this.state.ActivityLevel && this.state.proteinCalc && this.state.fatCalc)}
                                >Submit</Button>
                            </div>
                        </div>
                    </form>
                    <MacroDisplay 
                    message={this.state.message}
                    calculating={this.state.calculating}
                    />
                </fieldset>
            </div>
        );
    }
}

export default Nutrition;