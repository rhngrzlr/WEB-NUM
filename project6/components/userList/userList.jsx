import React from "react";
import { Link } from "react-router-dom";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";
import "./userList.css";
import axios from "axios";

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list1: []
    };

    // fetch("http://localhost:3000/user/list")
    //   .then(response => response.json())
    //   .then(data => this.setState({ list: data }));
    axios
      .get("http://localhost:3000/user/list")
      .then(res => {
        //console.log(res);
        this.setState({ list1: res.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  outOfBandJSX() {
    //console.log(list1);
    var listOfNames = this.state.list1.map(i => (
      <List>
        <ListItem component={Link} to={"/users/" + i._id}>
          <ListItemText primary={i.first_name + " " + i.last_name} />
        </ListItem>
        <Divider />
      </List>
    ));
  }

  render() {
    //var listItems = ([] = window.cs142models.userListModel());

    return (
      <div>
        {/* <Typography variant="body1">
          This is the user list, which takes up 3/12 of the window. You might
          choose to use <a href="https://material-ui.com/demos/lists/">Lists</a>{" "}
          and <a href="https://material-ui.com/demos/dividers">Dividers</a> to
          display your users like so:
        </Typography> */}
        {this.state.list1.map(i => {
          return (
            <List key={i._id}>
              <ListItem component={Link} to={"/users/" + i._id}>
                <ListItemText primary={i.first_name + " " + i.last_name} />
              </ListItem>
              <Divider />
            </List>
          );
        })}
        <Typography variant="body1">
          {/* {window.cs142models.userListModel()} */}
          {/* The model comes in from window.cs142models.userListModel() */}
        </Typography>
      </div>
    );
  }
}

export default UserList;
