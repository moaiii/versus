// @flow

import type {Game} from '../types/Game.type';
import Team from '../../classes/Team.class';

/**
 * @param {Array<Game>} games
 * @return {Array<Object>} array of team objects
 */
function getAllTeamsAndPlayers(games: Array<Game> = []): Array<Team> {
  if (games.length === 0) {
    throw new Error(`[DEV ERROR] No games provided to the get all teams 
      and players function`);
      
  } else {
    let allTeams: Array<Team> = [];

    let teamsList: Array<string> = [];

    games.forEach((game) => {
      let status = ['home', 'away'];

      status.forEach((s) => {
        // team to find
        let find = game[`match_${s}team_name`];

        /**
         * Concat the starting line up with the substitutes
         * to make one big squad object, easier to work with
         */
        const squad = [
          ...game.lineup[`${s}`].starting_lineups,
          ...game.lineup[`${s}`].substitutes
        ];

        /**
         * if the team doesnt exist, create a new team Class
         */ 
        if (!teamsList.includes(find)) {

          teamsList.push(find);

          allTeams.push(new Team(game[`match_${s}team_name`]));
          let i = allTeams.length - 1;

          squad.forEach((player) => {
            allTeams[i].addTosquad(player.lineup_player);
          });

        } else {
          
          /**
           * The team exists, find its index in teamsList and add to 
           * the object in allTeams (same index)
           */
          let _i = teamsList.indexOf(find);
          
          squad.forEach((player) => {
            allTeams[_i].addTosquad(player.lineup_player);
          });
        }
      });
    });

    return allTeams;
  }
}

module.exports = {
  getAllTeamsAndPlayers
};
