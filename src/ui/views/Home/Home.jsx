// @flow
import * as React from "react";
import './Home.scss'

type Props = {
  countries: Array<any>,
  getCountries: Function,
  setSelectedCountry: Function,
  leagues: Array<any>,
  setSelectedLeague: Function,
  seasons: Array<Object>,
  setDateSelection: Function
};

type State = {};

export default class Home extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount(): void { }

  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    return true;
  };

  render(): React.Element<"div"> {

    const {
      countries,
      getCountries,
      setSelectedCountry,
      leagues,
      setSelectedLeague,
      seasons,
      setDateSelection
    } = this.props;

    // const { } = this.state;

    const _countries = countries.map((country, i) => {
      return (
        <p
          onClick={() => setSelectedCountry(country.country_name)}
          key={`${i}-country-name`}>
          {country.country_name}
        </p>
      );
    });

    const _leagues = leagues.map((league, i) => {
      return (
        <p
          onClick={() => setSelectedLeague(league.league_name)}
          key={`${i}-league-name`}>
          {league.league_name}
        </p>
      );
    });

    const _seasons = seasons.map((season, i) => {
      return (
        <button onClick={() => setDateSelection(season)}
          key={`${i}-dates-button`}>
          <p>{`Season ${season.start.year} - ${season.end.year}`}</p>
        </button>
      );
    });

    const quickStyle = {
      "display": "flex",
      "justifyContent": "space-between"
    }

    return (
      <div className={`Home`}>
        <div className="stuff" style={quickStyle}>
          <div className="countries">
            <h2>1. Countries</h2>
            <button onClick={() => getCountries()}>Get Countries</button>
            {_countries}
          </div>
          <div className="leagues">
            <h2>2. Leagues</h2>
            {_leagues}
          </div>
          <div className="seasons">
            <h2>3. Seasons</h2>
            {_seasons}
          </div>
          <div className="games">
            <h2>4. Games</h2>
            <p>See console for games output</p>
          </div>
        </div>
      </div>
    );
  }
}
