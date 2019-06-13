// @flow
import * as React from "react";


export default class GameWindow extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {}

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  };

  render(){
    const { } = this.props;
    const { } = this.state;

    return (
      <div className={`GameWindow`}>
      </div>
    );
  }
}
