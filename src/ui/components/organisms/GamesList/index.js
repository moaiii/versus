// @flow
import {connect} from 'react-redux';
import {store} from '../../../../utils/redux';
import GamesList from './GamesList.jsx';
import * as action from './GamesList.action';
import GamesListMiddleware from './GamesList.middleware';
import GamesListReducer from './GamesList.reducer';


function mapStoreToProps( store ) {
  return {

  }
}

function mapDispatchToProps( dispatch ) {
  return {

  }
}


export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(GamesList);

export {
  GamesListMiddleware,
  GamesListReducer
}
