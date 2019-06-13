// @flow
import * as React from "react";
import DualSlider from '../../atoms';

export default class GameWindow extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {}

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  };

  handleTimeWindowChange = (e) => {
    console.log(e);
    this.props.setTime(e);
  }

  tipFormatter = (value) => {
    return `${value} mins`
  }

  render(){
    const { } = this.props;
    const { } = this.state;

    return (
      <div className={`GameWindow`}>
        <h2>Game time window</h2>
        <DualSlider
          onAfterChange={this.handleTimeWindowChange}
          className={`GameWindow__dualslider`}
          min={0}
          max={110}
          defaultValue={[0, 90]}
          tipFormatter={this.tipFormatter} />
      </div>
    );
  }
}
