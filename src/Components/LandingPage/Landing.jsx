import React, { Component } from "react";
import face from "../../Images/moneyHeist.png";
import "./Landing.css";
import data from "../../Data/db";

class LandingPage extends Component {
  state = { rohit: "" };

  componentDidMount() {
    this.setState({
      rohit: data.getMyDetails(),
      groups: data.getAllGroups(),
    });
  }
  render() {
    console.log(this.state);
    return (
      <div className="lp_box col-md-12 col-12">
        <div className="profileImageName col-sm-12 col-md-4">
          <img className="profPic" src={face} alt="Profile Pic" />
          <h3>
            <a href={"tel:" + this.state.rohit.phone}>
              {this.state.rohit.fname + " " + this.state.rohit.lname + " "}
              <span className="glyphicon"> &#xe182;</span>
            </a>
          </h3>
        </div>
        <div className="profileImageName col-sm-12 col-md-4">
          <div>
            <h3>Emergency Contact</h3>
            {this.state.rohit !== "" ? (
              <h3 style={{ display: "flex", justifyContent: "space-between" }}>
                {this.state.rohit.contact[0].fname + " "}
                <h4>
                  <a
                    className="glyphicon"
                    href={"tel:" + this.state.rohit.contact[0].phone[0]}
                  >
                    &#xe182;1
                  </a>
                </h4>
                <h4>
                  <a
                    className="glyphicon"
                    href={"tel:" + this.state.rohit.contact[0].phone[1]}
                  >
                    &#xe182;2
                  </a>
                </h4>
              </h3>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
