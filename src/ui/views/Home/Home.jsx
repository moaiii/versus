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
    // this.props.getSeasons();
    // this.props.getCountries();
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
