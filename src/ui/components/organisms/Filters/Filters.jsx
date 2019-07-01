import * as React from "react";
import {
  GameWindow
} from '../../molecules';
import './Filters.scss';


export default class Filters extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {}

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  };

  render() {
    // const { } = this.props;
    // const { } = this.state;

    return (
      <div className={`Filters`}>
        <h1>Filters</h1>
        <GameWindow
          onChange={this.props.setFilter}
        />
        <div className={`Filters__reset`}>
          <button onClick={this.props.resetFilter}>Reset</button>
        </div>
      </div>
    );
  }
}
