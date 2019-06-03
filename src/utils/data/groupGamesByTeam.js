// @flow
import type {Game} from '../lib/types';
import Team from '../classes/Team.class';

const groupGamesByTeam = (games: Array<Game>): Function => {
  return (teams: Array<string>): Object => {

    let _teams = {};

    games.forEach( game => {
      let _teamFound;

      /**
       * Home team
       */
      if ( teams.includes(game.match_hometeam_name) ) {
        _teamFound = game.match_hometeam_name;
        if ( !_teams.hasOwnProperty(_teamFound) ) {
          _teams[_teamFound] = new Team( _teamFound );
        }
        _teams[_teamFound].addGame( game );
      }

      /**
       * Away team
       */
      if ( teams.includes(game.match_awayteam_name) ) {
        _teamFound = game.match_awayteam_name;

        if ( !_teams.hasOwnProperty(_teamFound) ) {
          _teams[_teamFound] = new Team( _teamFound );
        }
        _teams[_teamFound].addGame( game );
      }
    });

    /**
     * e.g.
     * {
     *  'Chelsea': new Team('Chelsea')
     *  'Manchester United': new Team('Manchester United')
     * }
     */
    return _teams;
  };
};

export default groupGamesByTeam;
