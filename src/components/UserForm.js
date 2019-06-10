import React, { Component } from 'react'
import FormPersonalDetails from "./FormPersonalDetails";
import FormUserDetails from "./FormUserDetails";
import Confirm from "./Confirm";
import Success from "./Succes"

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        occupation: "",
        city: "",
        bio: ""
    }

    nextStep = () => {
        const step = this.state.step
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        this.setState({
            step: this.state.step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value })
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio };

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values} />
                )
            case 2:
                return (
                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Confirm
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        values={values}
                    />
                )
            case 4:
                return <h1>Seccess</h1>

        }
    }
}

export default UserForm
