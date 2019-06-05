import {filterGames} from '../../functions/games';
import { games } from '../../mocks';
const Team = require('../Team.class').default;


describe('Adding games to the class', () => {
  let filteredGames = filterGames({team: 'Manchester United', games});

  it('Should only add games this team is involved with', () => {
    let ManchesterUnited = new Team('Manchester United');
    ManchesterUnited.games = filteredGames;

    ManchesterUnited.games.forEach(game => {
      const hasManU = [game.match_hometeam_name,
        game.match_awayteam_name].includes('Manchester United');

      expect(hasManU).toBe(true);
    });
  });
});


describe('Generating standings', () => {
  let filteredGames = filterGames({team: 'Leicester City', games});

  it('should create standings with valid values', () => {
    let LeicesterCity = new Team('Leicester City');
    LeicesterCity.setGames(filteredGames);
    LeicesterCity.setStanding();
    expect(LeicesterCity.standings.goals.for).toEqual(2);
  });
});
