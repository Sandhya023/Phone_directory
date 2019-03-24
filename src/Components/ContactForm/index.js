import React, { PureComponent, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/index";

import "./style.css";

class ContactForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      error: false,
      errorMessage: ""
    };
  }
  onChangeName = event => {
    this.setState({
      name: event.target.value
    });
  };
  onChangePhone = event => {
    this.setState({
      phone: event.target.value
    });
  };
  addContact = event => {
    event.preventDefault();
    const phone = this.state.phone;
    if (isNaN(phone)) {
      this.setState({
        error: true,
        errorMessage: "Enter a valid Name or Phone Number"
      });
    } else {
      this.props.addContact({
        name: this.state.name,
        phone: this.state.phone
      });
    }
  };
  render() {
    let errorMessage;
    if (this.state.error) {
      errorMessage = this.state.errorMessage;
    }
    return (
      <Fragment>
        <Header><u className="header_ul">Mini Phone Directory</u></Header>
        <div className="AddContact_container">
          <Link to="/" className="form_link">
            <u className="header_ul">Back</u>
          </Link>
          <form className="AddContact_form" onSubmit={this.addContact}>
            <div className="form_control">
              <label htmlFor="name">Name: </label>
              <input
                className="form_input"
                type="text"
                id="name"
                onChange={this.onChangeName}
                required
              />
            </div>
            <div className="form_control">
              <label htmlFor="phone">Phone: </label>
              <input
                className="form_input"
                type="text"
                id="phone"
                onChange={this.onChangePhone}
                required
              />
            </div>
            <h4 className="form_error">{errorMessage}</h4>
            <hr />
            <h3><u className="header_ul">Contact to be added:</u></h3>
            <div className="form_display">
              Name: <span>{this.state.name}</span>
            </div>
            <div className="form_display">
              Phone: <span>{this.state.phone}</span>
            </div>
            <button type="submit" className="form_add">
              ADD
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default ContactForm;
