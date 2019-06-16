const { removeTeamsFromGameData } = require('../removeTeamsFromGameData');
const { games } = require('../../mocks');


describe('removeTeamsFromGameData', () => {
  it('should throw if not supplied array of teams', () => {
    expect(() => removeTeamsFromGameData('this is not an array')(games)).toThrow();
  });

  it('should return same array if team doesnt exist', () => {
    const prunedGames = removeTeamsFromGameData(['Celtic'])(games);
    expect(prunedGames.length).toBe(games.length);
  });

  it('should return an array where no game has the specified team', () => {
    const removeTeams = ['Manchester United', 'Everton'];
    const prunedGames = removeTeamsFromGameData(removeTeams)(games);

    prunedGames.forEach(game => {
      const isHomeTeam = removeTeams.includes(game.match_hometeam_name);
      const isAwayTeam = removeTeams.includes(game.match_awayteam_name);
      expect(isHomeTeam).toBeFalsy();
      expect(isAwayTeam).toBeFalsy();
    })
  });
});
