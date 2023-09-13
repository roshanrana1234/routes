// rce
import React, { Component } from "react";

export class ClassCounter extends Component {
  // Create State Variable
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  //   Creating a method Increament count
  // increamentCount = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // };

  increamentCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    return (
      <>
        <button onClick={this.increamentCount}>Count {this.state.count}</button>
      </>
    );
  }
}

export default ClassCounter;
