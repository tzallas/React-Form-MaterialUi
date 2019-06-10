import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export class Confirm extends Component {
    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    }

    back = event => {
        event.preventDefault();
        this.props.prevStep();
    }
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={this.props.values.firstName}
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={this.props.values.lastName}
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText={this.props.values.email}
                        />
                        <ListItem
                            primaryText="Occupation"
                            secondaryText={this.props.values.occupation}
                        />
                        <ListItem
                            primaryText="City"
                            secondaryText={this.props.values.city}
                        />
                        <ListItem
                            primaryText="Bio"
                            secondaryText={this.props.values.bio}
                        />
                    </List>
                    <br />
                    <RaisedButton
                        label="Confirm and Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}
export default Confirm
