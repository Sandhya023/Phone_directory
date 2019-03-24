import React, { Component } from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import Wrapper from "./Containers/Wrapper";
import ContactForm from "./Components/ContactForm/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }
  addContact = contact => {
    const { name, phone } = contact;
    const newContacts = [...this.state.contacts];
    newContacts.push({ name, phone, id: newContacts.length + 1 });
    this.setState(
      {
        contacts: newContacts
      },
      () => {
        this.props.history.push("/");
      }
    );
  };
  deleteContact = id => {
    const newContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({
      contacts: newContacts
    });
  };
  render() {
    return (
      <Switch>
        <Route
          path="/add"
          render={() => <ContactForm addContact={this.addContact} />}
        />
        <Route
          path="/"
          render={() => (
            <Wrapper
              contacts={this.state.contacts}
              deleteContact={this.deleteContact}
            />
          )}
        />
      </Switch>
    );
  }
}

export default withRouter(App);
