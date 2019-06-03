// @flow
// import type {Game} from '../types';
const compose = require('fp-compose');
const find = require('lodash/find');


/**
 * Types
 */
type TimeWindow = {
  from: number,
  to: number
}

/**
 * @param {string} team
 * @return {Function(Array<Game>)} curry curry
 */
function getThisTeamsGames(team: string = ''): Function {
  return (games): Array<Game> => {
    return games
      .filter((game) =>
        game.match_hometeam_name === team ||
        game.match_awayteam_name === team);
  };
}

/**
 * @param {Array<string>} teamExclusions
 * @return {Function(Array<Game>)} curry curry
 */
function excudeOppositionTeams(teamExclusions: Array<string> = []): Function {
  return (games): Array<Game> => {
    return games
      .filter((game) =>
        !teamExclusions.includes(game.match_hometeam_name) &&
        !teamExclusions.includes(game.match_awayteam_name)
      );
  };
}

/**
 * @param {Array<string>} teamInclusions
 * @return {Function(Array<Game>)} curry
 */
function includeOppositionTeams(teamInclusions: Array<string> = []): Function {
  return (games): Array<Game> => {
    if(teamInclusions.length === 0 || !teamInclusions) {
      return games;
    }
      return games
        .filter((game) =>
          teamInclusions.includes(game.match_hometeam_name) &&
          teamInclusions.includes(game.match_awayteam_name)
        );

  };
}

/**
 * @param timeWindow the minute range from 0 to 90+
 * @param {number} timeWindow.from
 * @param {number} timeWindow.to
 * @return {Function(Array<Game>)} curry
 */
function filterOutGoals(timeWindow: ?TimeWindow = null): Function {
  return (games): Array<Game> => {
    if (!timeWindow) {
      return games;
    }
      return games
        .map((game) => Object.assign({}, game, {
          goalscorer: game['goalscorer'].filter((gs) =>
            parseInt(gs.time, 10) >= timeWindow.from &&
            parseInt(gs.time, 10) <= timeWindow.to
          )
        }));

  };
}

/**
 * @param timeWindow the minute range from 0 to 90+
 * @param {number} timeWindow.from
 * @param {number} timeWindow.to
 * @return {Function(Array<Game>)} curry
 */
function filterOutCards(timeWindow: ?TimeWindow = null): Function {
  return (games): Array<Game> => {
    if (!timeWindow) {
      return games;
    }
      return games
        .map((game) => Object.assign({}, game, {
          cards: game['cards'].filter((gs) => {
            return parseInt(gs.time, 10) >= timeWindow.from &&
            parseInt(gs.time, 10) <= timeWindow.to;
          })
        }));

  };
}

/**
 * Mutative function altering the scores based on whats
 * in the goalscorers array
 * @return {Function(Array<Game>)} curry
 */
function recalculateScores(): Function {
  return (games): Array<Game> => {
    return games
      .map((game) => {
        let match_hometeam_score = 0;
        let match_hometeam_halftime_score = 0;
        let match_awayteam_score = 0;
        let match_awayteam_halftime_score = 0;

        game.goalscorer.forEach((goal) => {
          if (goal.home_scorer && goal.away_scorer.length === 0) {
            match_hometeam_score++;
            if (parseInt(goal.time, 10) <= 45) {
              match_hometeam_halftime_score++;
            }

          } else if (goal.away_scorer && goal.home_scorer.length === 0) {
            match_awayteam_score++;
            if (parseInt(goal.time, 10) <= 45) {
              match_awayteam_halftime_score++;
            }
          }
        });

        return Object.assign({}, game, {
          match_hometeam_score,
          match_hometeam_halftime_score,
          match_awayteam_score,
          match_awayteam_halftime_score
        });
      });
  };
}

/**
 * @param {Array<string>} excludedPlayers
 * @return {Function(Array<Game>)} curry
 */
function excludeGamesThesePlayersStart(
  excludedPlayers: Array<string> = []): Function {
  return (games): Array<Game> => {
    return games
      .filter((game) => {
        let playersFoundInThisGame = excludedPlayers
          .map((player) =>
            find({'lineup_player': player}, game.lineup.home.starting_lineups) ||
            find({'lineup_player': player}, game.lineup.away.starting_lineups))
          .filter((res) => typeof res !== 'undefined');

        // i.e. these players did not start so return the game obj
        return playersFoundInThisGame.length === 0;
      });
  };
}

/**
 * @param {string} team
 * @param {Object} game
 * @return {string}
 */
function getThisTeamsStatus(team: string = '', game: ?Game = null): string {
  if (!team || !game) {
    throw new Error(`[DEV ERROR] A param was no supplied to getThisTeamsStatus.
      team = ${team}, game = ${JSON.stringify(game)}`);
  } else {
    if (game.match_hometeam_name === team) {
      return 'home';
    } else if (game.match_awayteam_name === team) {
      return 'away';
    }
      return 'unknown';

  }
}

/**
 * @example
 * const filteredGames = filterGames({
    team: 'Arsenal',
    teamExclusions: ['Chelsea'],
    teamInclusions: [],
    timeWindow: {from: 45, to: 90},
    games: JSON.parse(gamesData),
    excludedPlayers: ['Bernd Leno', 'Mesut Ozil']
  })
 */

type FilterGamesParams = {
  team: string,
  teamExclusions: Array<string>,
  teamInclusions: Array<string>,
  timeWindow: TimeWindow,
  games: Array<Game>,
  excludedPlayers: Array<string>
}

function filterGames({
  team = '',
  teamExclusions = [],
  teamInclusions = [],
  timeWindow = {from: 0, to: 90},
  games = [],
  excludedPlayers = []
}: FilterGamesParams = {}): Array<Game> {
  return compose(
    excludeGamesThesePlayersStart(excludedPlayers),
    filterOutCards(timeWindow),
    recalculateScores(),
    filterOutGoals(timeWindow),
    excudeOppositionTeams(teamExclusions),
    includeOppositionTeams(teamInclusions),
    getThisTeamsGames(team)
  )(games);
}

module.exports = {
  filterGames,
  filterOutGoals,
  filterOutCards,
  getThisTeamsGames,
  getThisTeamsStatus,
  excudeOppositionTeams,
  includeOppositionTeams,
  excludeGamesThesePlayersStart
};
