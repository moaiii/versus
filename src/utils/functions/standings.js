import fp from 'lodash/fp';
import { getThisTeamsStatus } from './games';

const add = require('lodash/add');

const cleanScore = (scoreDirty) => {
  const parsedScore = parseInt(scoreDirty, 10);
  return isNaN(parsedScore) ? 0 : parsedScore;
}

/**
 * @param {string} team
 * @param {Array<Game>} games
 */
function generateStandings(team = '', games = []) {
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

    const usScore = cleanScore(game[`match_${usStatus}team_score`], 10);
    const themScore = cleanScore(game[`match_${themStatus}team_score`], 10);

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


    // console.log({usScore, themScore})

    goals.for += usScore;
    goals.against += themScore;
    goals.difference = goals.for - goals.against;

    gamesTotal.played++;
  });

  // console.log({goals})

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

const fpMap = fp.map.convert({ cap: false })

const formatStandings = fp.flow(
  fp.map(team => {

    const { standings } = team;
    return {
      Club: team.name,
      Played: standings.gamesTotal.played,
      Won: standings.gamesTotal.won,
      Drawn: standings.gamesTotal.drawn,
      Lost: standings.gamesTotal.lost,
      GF: standings.goals.for,
      GA: standings.goals.against,
      GD: standings.goals.difference,
      Points: standings.pointsTotal
    }
  }),
  fp.orderBy(['Points'], ['desc']),
  fpMap((team, index) => ({
    ...team,
    Position: index + 1
  }))
)

export default {
  formatStandings,
  generateStandings
};
