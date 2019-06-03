// @flow

import Home from "./Home.jsx";
import store from '../../../utils/redux/store';
import { connect } from "react-redux";
import * as actions from './Home.actions';

function mapStoreToProps(store) {
  return {
    countries: store.countriesReducer.value,
    leagues: store.leaguesReducer.value,
    seasons: store.datesReducer.seasons,
    games: store.gamesReducer.games,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getSeasons: () => dispatch(actions.getSeasons()),
    getCountries: () => dispatch(actions.getCountries.submit()),
    setSelectedCountry: country => dispatch(actions.setSelectedCountry(country)),
    setSelectedLeague: league => dispatch(actions.setSelectedLeague(league)),
    setDateSelection: dates => dispatch(actions.setDateSelection({
        dates,
        middlewareMode: "last"
      })
    ),
  }
}

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Home);
