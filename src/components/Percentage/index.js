import React, { Component } from "react";
import "./index.css";

class Percentage extends Component {
  state = {
    value_1: 0,
    value_2: 0,
    value_3: 0,
    color: "",
  };
  componentDidMount() {
    this.renderPercentage();
    this.renderColor();
  }

  renderColor = () => {
    const { percentage } = this.props;
    if (percentage <= 33.3) {
      this.setState({ color: " red" });
    } else if (percentage <= 66.6) {
      this.setState({ color: " orange" });
    } else if (percentage <= 90) {
      this.setState({ color: " Yellow" });
    } else if (percentage <= 100) {
      this.setState({ color: " blue" });
    } else {
      this.setState({ color: "" });
    }
  };

  renderPercentage = () => {
    const { percentage } = this.props;
    if (percentage <= 33.3) {
      const value1 = (percentage / 33.3) * 100;
      const value2 = 0;
      const value3 = 0;
      this.setState({ value_1: value1 });
      this.setState({ value_2: value2 });
      this.setState({ value_3: value3 });
    } else if (percentage <= 66.6) {
      const value1 = 100;
      const value2 = ((percentage - 33.3) / 33.3) * 100;
      const value3 = 0;
      this.setState({ value_1: value1 });
      this.setState({ value_2: value2 });
      this.setState({ value_3: value3 });
    } else if (percentage <= 100) {
      const value1 = 100;
      const value2 = 100;
      const value3 = ((percentage - 66.6) / 33.3) * 100;
      this.setState({ value_1: value1 });
      this.setState({ value_2: value2 });
      this.setState({ value_3: value3 });
    } else {
      this.setState({ value_1: 0 });
      this.setState({ value_2: 0 });
      this.setState({ value_3: 0 });
    }
  };

  render() {
    const { value_1, value_2, value_3, color } = this.state;
    const progressInner = `progress-inner${color}`;
    return (
      <div className="demo-css">
        <div className="progress">
          <div className="progress-wrapper">
            <div
              className={progressInner}
              style={{ width: `${value_1}%` }}
            ></div>
          </div>
          <div className="progress-wrapper">
            <div
              className={progressInner}
              style={{ width: `${value_2}%` }}
            ></div>
          </div>
          <div className="progress-wrapper">
            <div
              className={progressInner}
              style={{ width: `${value_3}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Percentage;
