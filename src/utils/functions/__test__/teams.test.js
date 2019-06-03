import games from '../../mocks/games.mock';
import teamFuncs from '../teams';

describe('getAllTeamsAndPlayers()', () => {
  const groupedTeamsandPlayers
    = teamFuncs.getAllTeamsAndPlayers( games );

  it('should create 8 team classes', () => {
    /**
     * Mocks contain 4 unique games, 8 games total 2 sets of duplicates
     * Therefore there is 8 unique teams in the games mock
     * This test asserts no duplicates are created
     */
    expect(groupedTeamsandPlayers).toHaveLength(8);
  });
  
  it('each team class should have min 11 players', () => {
    groupedTeamsandPlayers.forEach(teamClass => {
      expect([...teamClass.squad].length).toBeGreaterThanOrEqual(11);
    });
  });
});
