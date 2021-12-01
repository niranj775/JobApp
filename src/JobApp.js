import { Component } from "react";

class JobApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candName: "",
      candEmail: "",
      candAge: "",
      roleApplied: "",
      termsCond: "",
      errors: {
        candName: "",
        candEmail: "",
        candAge: "",
        roleApplied: "",
        termsCond: "",
      },
    };
  }

  handleChange = ({ target: { name, value, type, checked } }) => {
    if (type === "checkbox") value = checked;

    const errors = { ...this.state.errors };

    switch (name) {
      case "candName": {
        //Validation for Candidate Name
        errors.candName = !value ? "Please enter the name." : "";
        break;
      }
      case "candEmail": {
        //Validation for Candidate E-mail
        errors.candEmail = !value ? "Please enter the e-mail." : "";
        break;
      }
      case "candAge": {
        //Validation for Candidate Age
        errors.candAge = !value ? "Please enter the age." : "";
        break;
      }
      case "roleApplied": {
        //Validation for Role Applied
        errors.roleApplied = !value ? "Please choose the role applied." : "";
        break;
      }
      case "termsCond": {
        //Validation for Terms and Conditions
        errors.termsCond = !value
          ? "Please accept the terms and conditions."
          : "";
        break;
      }
    }

    console.log(this.state.errors);

    this.setState({ ...this.state, [name]: value, errors });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h2>Job Application</h2>
          <div>
            {/*Candidate Name*/}
            <label>Candidate Name: </label>
            <input
              type="text"
              name="candName"
              placeholder="Enter candidate's name"
              value={this.state.candName}
              onChange={this.handleChange}
              required
            />
            <span className="error">{this.state.errors.candName}</span>
          </div>

          <br />
          <div>
            {/*Candidate E-mail*/}
            <label>Candidate E-mail: </label>
            <input
              type="email"
              name="candEmail"
              placeholder="Enter candidate's e-mail"
              value={this.state.candEmail}
              onChange={this.handleChange}
              required
            />
            <span className="error">{this.state.errors.candEmail}</span>
          </div>

          <br />
          <div>
            {" "}
            {/*Candidate Age*/}
            <label>Candidate Age: </label>
            <input
              type="number"
              name="candAge"
              placeholder="Enter candidate's age"
              value={this.state.candAge}
              onChange={this.handleChange}
              required
            />
            <span className="error">{this.state.errors.candAge}</span>
          </div>

          <br />
          <div>
            {" "}
            {/*Role Applied*/}
            <label>Role Applied: </label>
            <select
              value={this.state.roleApplied}
              name="roleApplied"
              onChange={this.handleChange}
              required
            >
              <option value="">---Select a Role---</option>
              <option value="react">React developer</option>
              <option value="node">Node developer</option>
              <option value="mern">MERN developer</option>
            </select>
            <span className="error">{this.state.errors.roleApplied}</span>
          </div>

          <br />
          <div>
            {" "}
            {/*Terms and Conditions*/}
            <input
              type="checkbox"
              name="termsCond"
              checked={this.state.termsCond}
              onChange={this.handleChange}
              required
            />
            <label>I agree to Terms & Conditions.</label>
            <span className="error">{this.state.errors.termsCond}</span>
          </div>

          <br />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </>
    );
  }
}

export default JobApp;
