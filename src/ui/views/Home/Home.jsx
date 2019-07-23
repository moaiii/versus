// @flow
import fp from 'lodash/fp';
import * as React from "react";
import { BasicSelector } from '../../components/atoms';
import './Home.scss'
import StandingsTable from '../../components/organisms/StandingsTable';


export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    this.props.getSeasons();
    this.props.getCountries();
  }

  shouldComponentUpdate(nextProps, nextState) {
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
        options={fp.sortBy(['country_name'], countries)}
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

    const _gamesList = games.map((game, i) => {
      const {
        match_hometeam_name,
        match_hometeam_score,
        match_awayteam_name,
        match_awayteam_score,
      } = game;

      return (
        <p key={game.match_id}>
          {`${match_hometeam_name} ${match_hometeam_score} - ${match_awayteam_name} ${match_awayteam_score}`}
        </p>
      )
    })

    return (
      <div className={`Home`}>
        <div className="inner-container">
          <div className="countries">
            <h2>1. Countries</h2>
            {_countriesSelector}
          </div>
          <div className="leagues">
            <h2>2. Leagues</h2>
            {_leaguesSelector}
          </div>
          <div className="seasons">
            <h2>3. Seasons</h2>
            {_seasonsSelector}
          </div>
          <div className="games">
            <h2>4. League Table</h2>
            <StandingsTable />
          </div>
        </div>
      </div>
    );
  }
}
