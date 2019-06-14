// @flow
import * as React from "react";
import { DualSlider } from '../../atoms';
import './GameWindow.scss';

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
    const [to, from] = e;

    this.props.onChange({
      key: 'timeWindow',
      value: { to, from }
    });
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
          onChange={this.handleTimeWindowChange}
          className={`GameWindow__dualslider`}
          marks={{ 0: 0, 45: 45, 90: 90 }}
          min={0}
          max={100}
          defaultValues={[0, 90]}
          tipFormatter={this.tipFormatter} />
      </div>
    );
  }
}
