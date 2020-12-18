import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import "./userPhotos.css";

/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: []
    };
    // fetch(
    //   "http://localhost:3000/photosOfUser/" + this.props.match.params.userId
    // )
    //   .then(response => response.json())
    //   .then(data => this.setState({ x: data }));
  }
  p() {
    // fetch(
    //   "http://localhost:3000/photosOfUser/" + this.props.match.params.userId
    // )
    //   .then(response => response.json())
    //   .then(data => this.setState({ x: data }));
    //console.log("data: " + this.state.x);
    axios
      .get(
        "http://localhost:3000/photosOfUser/" + this.props.match.params.userId
      )
      .then(res => {
        this.setState({ x: res.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    this.p();
    //console.log("data: " + this.state.x);
    //var x = window.cs142models.photoOfUserModel(this.props.match.params.userId);
    //console.log(x);
    return (
      <Typography variant="body1">
        {/* This should be the UserPhotos view of the PhotoShare app. Since it is
        invoked from React Router the params from the route will be in property
        match. So this should show details of user:
        {this.props.match.params.userId}. You can fetch the model for the user
        from window.cs142models.photoOfUserModel(userId): */}
        {/* <Typography variant="caption">
          {JSON.stringify(
            window.cs142models.photoOfUserModel(this.props.match.params.userId)
          )}
        </Typography> */}

        {this.state.x.map(i => {
          //console.log(this.state.x);
          if (i.comments !== undefined) {
            return (
              <div className="cont">
                <img src={"/images/" + i.file_name} alt="" />
                <p>Post date: {i.date_time}</p>
                {i.comments.map(j => (
                  <label>
                    <span>
                      <p className="comment">
                        <Link to={"/users/" + j.user._id}>
                          {j.user.first_name + " " + j.user.last_name}
                        </Link>
                        <p>
                          {j.comment}
                          {" - " + j.date_time}
                        </p>
                      </p>
                    </span>
                  </label>
                ))}
              </div>
            );
          } else {
            return (
              <div className="cont">
                {
                  <span>
                    <img src={"/images/" + i.file_name} alt="" />
                    <p>Post date: {i.date_time}</p>
                  </span>
                }
              </div>
            );
          }
        })}
      </Typography>
    );
  }
}

export default UserPhotos;
