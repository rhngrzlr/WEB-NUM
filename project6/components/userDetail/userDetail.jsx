import React from "react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import "./userDetail.css";

/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      v: [],
    };
  }

  rep() {
    axios
      .get("http://localhost:3000/user/" + this.props.match.params.userId)
      .then((res) => {
        this.setState({ v: res.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  outOfBandJSX() {
    //console.log(v);
    var listOfNames = this.state.v.map((i) => (
      <Typography variant="body1">
        {/* This should be the UserDetail view of the PhotoShare app. Since it is
        invoked from React Router the params from the route will be in property
        match. So this should show details of user:
        {this.props.match.params.userId}. You can fetch the model for the user
        from window.cs142models.userModel(userId). */}
        {/* <Button
          variant="contained"
          color="primary"
          component={Link}
          to={"/photos/" + this.props.match.params.userId}
        >
          CHECK OUT PHOTOS
        </Button> */}
        <p>First name: {i.first_name}</p>
        <p>Last name: {i.last_name}</p>
        <p>Location: {i.location}</p>
        <p>Description: {i.description}</p>
        <p>Occupation: {i.occupation}</p>
      </Typography>
    ));
  }
  render() {
    this.rep();
    const sd = this.state.v;
    // let v = window.cs142models.userModel(this.props.match.params.userId);
    return (
      <Typography variant="body1">
        {/* This should be the UserDetail view of the PhotoShare app. Since it is
        invoked from React Router the params from the route will be in property
        match. So this should show details of user:
        {this.props.match.params.userId}. You can fetch the model for the user
        from window.cs142models.userModel(userId). */}
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={"/photos/" + this.props.match.params.userId}
        >
          CHECK OUT PHOTOS
        </Button>
        <p>First name: {sd.first_name}</p>
        <p>Last name: {sd.last_name}</p>
        <p>Location: {sd.location}</p>
        <p>Description: {sd.description}</p>
        <p>Occupation: {sd.occupation}</p>
      </Typography>
    );
  }
}

export default UserDetail;
