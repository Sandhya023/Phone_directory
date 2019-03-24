import React, { Component } from "react";
import Contacts from "../Components/ContactList/index";
import { Link } from "react-router-dom";
import Header from "../Components/Header/index";
import "./main.css";
var FontAwesome = require('react-fontawesome');

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Header><u className="header-ul">Phone Directory {' '} </u></Header>
        <div className="Main_container">
          <Link to="/add" className="Main_add">
            <FontAwesome name='plus' /> {" "}ADD
          </Link>
          <Contacts
            list={this.props.contacts}
            onDelete={this.props.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default Main;
