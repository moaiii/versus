// @flow
import * as React from "react";
import { BasicSelector } from '../../atoms';


export default class LeagueSelector extends React.Component{
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {}

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  };

  render() {
    const {
      leagues,
      setSelectedLeague
    } = this.props;

    const { } = this.state;

    const _leaguesSelector =
      <BasicSelector
        options={leagues}
        pickString={'league_name'}
        handleChangeCallback={setSelectedLeague}
        label={'Select league'}
      />;

    return (
      <div className={`LeagueSelector`}>
        <h2>2. Leagues</h2>
        {_leaguesSelector}
      </div>
    );
  }
}
