import {getThisTeamsStatus} from './games';

const add = require('lodash/add');

/**
 * @param {string} team
 * @param {Array<Game>} games
 */
function generateStandings(team= '', games = []) {
  let points = [];
  let pointsCumulative = [];
  let form = [];
  let gamesTotal = {
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0
  };
  let goals = {
    for: 0,
    against: 0,
    difference: 0
  };

  games.forEach((game, index) => {
    const usStatus = getThisTeamsStatus(team, game);
    const themStatus = usStatus === 'home' ? 'away' : 'home';

    const usScore = parseInt(game[`match_${usStatus}team_score`], 10);
    const themScore = parseInt(game[`match_${themStatus}team_score`], 10);

    // get wins
    if (usScore > themScore) {
      points.push(3);
      pointsCumulative.push(add(pointsCumulative[index - 1], 3));
      form.push('W');
      gamesTotal.won++;
    }

    // get losses
    if (usScore < themScore) {
      points.push(0);
      pointsCumulative.push(add(pointsCumulative[index - 1], 0));
      form.push('L');
      gamesTotal.lost++;
    }

    // get draws
    if (usScore === themScore) {
      points.push(1);
      pointsCumulative.push(add(pointsCumulative[index - 1], 1));
      form.push('D');
      gamesTotal.drawn++;
    }

    goals.for += usScore;
    goals.against += themScore;
    goals.difference = goals.for - goals.against;

    gamesTotal.played++;
  });

  const pointsTotal = points
    .reduce((ac, cu) => ac + cu, 0);

  return {
    points,
    pointsTotal,
    pointsCumulative,
    form,
    gamesTotal,
    goals
  };
}

export {
  generateStandings
};
