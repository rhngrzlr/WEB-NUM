import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "./TopBar.css";
import axios from "axios";
/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      s: [],
      list: []
    };
    // fetch("http://localhost:3000/test/info")
    //   .then(response => response.json())
    //   .then(data => this.setState({ s: data }));
    axios.get("http://localhost:3000/test/info").then(res => {
      this.setState({ s: res.data });
    });
  }
  outOfBandJSX() {
    var listOfNames = this.state.s.map(i => (
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            Erdenegombo Version: {i.__v}
          </Typography>
          <Typography variant="h5" color="inherit" id="right">
            {z}
          </Typography>
        </Toolbar>
      </AppBar>
    ));
  }
  render() {
    //var sch = window.cs142models.schemaInfo();
    //var v = ([] = window.cs142models.userListModel());
    axios.get("http://localhost:3000/user/list").then(res => {
      this.setState({ list: res.data });
    });
    var v = this.state.list;
    var x = window.location.href.substr(46, 54);
    if (x.length > 0) {
      if (x.substr(0, 1) !== "/") {
        var y = v.filter(i => x === i._id);
        var z = y[0].first_name;
      } else {
        x = x.substr(1);
        var y = v.filter(i => x === i._id);
        var z = " Photos of " + y[0].first_name;
      }
    } else z = " ";
    return (
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            Erdenegombo Version: {this.state.s.__v}
          </Typography>
          <Typography variant="h5" color="inherit" id="right">
            {z}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
