// @flow
import * as React from "react";
import { BasicSelector } from '../../components/atoms';
import './Home.scss'
import {
  StandingsTable,
  RootSelectors,
  Filters
} from '../../components/organisms';


export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount(){
    this.props.getSeasons();
    this.props.getCountries();
  }

  shouldComponentUpdate(nextProps, nextState){
    return true;
  };

  render() {
    const {
      table,
      countries,
      setSelectedCountry,
      leagues,
      setSelectedLeague,
      seasons,
      setDateSelection,
      games
    } = this.props;

    const _countriesSelector =
      <BasicSelector
        options={countries}
        pickString={'country_name'}
        handleChangeCallback={setSelectedCountry}
        label={'Country'}
      />;

    const _leaguesSelector =
      <BasicSelector
        options={leagues}
        pickString={'league_name'}
        handleChangeCallback={setSelectedLeague}
        label={'Select league'}
      />;

    const _seasonsSelector =
      <BasicSelector
        options={seasons}
        pickString={'start.year'}
        handleChangeCallback={setDateSelection}
        label={'Select season'}
      />;

    return (
      <div className={`Home`}>
        <div className="inner-container">
          <div className="selectors">
            <RootSelectors />
          </div>
          <div className="games">
            <h2>4. League Table</h2>
            <StandingsTable />
            <Filters />
          </div>
        </div>
      </div>
    );
  }
}
