// @flow
import * as React from "react";

import {
  CountrySelector,
  DateSelector,
  LeagueSelector
} from '../../molecules';


export default class RootSelectors extends React.Component{
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
      <div className={`RootSelectors`}>
        <CountrySelector />
        <LeagueSelector />
        <DateSelector />
      </div>
    );
  }
}
