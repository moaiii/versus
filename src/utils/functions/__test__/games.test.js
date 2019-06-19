import * as gameFuncs from '../games';
import { games } from '../../mocks';


describe ('excudeOppositionTeams()', () => {
  const gamesWithoutChelsea = gameFuncs
    .excudeOppositionTeams(['Chelsea', 'Everton'])(games);

  it ('Removes all games involving teams included in the exclusions array', () => {
    gamesWithoutChelsea.forEach((game) => {
      expect(game.match_hometeam_name).not.toEqual('Chelsea');
      expect(game.match_awayteam_name).not.toEqual('Chelsea');
      expect(game.match_hometeam_name).not.toEqual('Everton');
      expect(game.match_awayteam_name).not.toEqual('Everton');
    });
  });

  it ('Returns same number of games if no teams specified', () => {
    const gamesWithEveryone = gameFuncs.excudeOppositionTeams([''])(games);
    expect(gamesWithEveryone.length).toEqual(games.length);
  });
});


describe('includeOppositionTeams()', () => {
  const exclusiveClubs = ['Arsenal', 'Liverpool', 'Everton', 'Chelsea'];

  const exclusiveLeague = gameFuncs
    .includeOppositionTeams(exclusiveClubs)(games);

  it('games should only include the teams specified', () => {
    exclusiveLeague.forEach(game => {
      let hasHomeTeam = exclusiveClubs.includes(game.match_hometeam_name);
      let hasAwayTeam = exclusiveClubs.includes(game.match_awayteam_name);
      expect(hasHomeTeam).toBe(true);
      expect(hasAwayTeam).toBe(true);
    });
  });

  it('should not contain a team not in the spec array', () => {
    exclusiveLeague.forEach(game => {
      let hasHomeTeam = exclusiveClubs.includes('Celtic');
      let hasAwayTeam = exclusiveClubs.includes('Celtic');
      expect(hasHomeTeam).toBe(false);
      expect(hasAwayTeam).toBe(false);
    });
  });
});


describe ('getThisTeamsGames()', () => {
  const allManchesterCitiesGames = gameFuncs
    .getThisTeamsGames('ManchesterCity')(games);

  it ('All games should have correct team either home or away', () => {
    allManchesterCitiesGames.forEach((game) => {
      expect(game.match_hometeam_name === 'Manchester City' ||
        game.match_awayteam_name === 'Manchester City').toBeTruthy();
    });
  });
});


describe ('filterOutGoals()', () => {
  const timeWindow = {from: 0, to: 45};
  const secondHalfGoalsRemoved = gameFuncs.filterOutGoals(timeWindow)(games);

  it ('removes goals outwith time frame', () => {
    secondHalfGoalsRemoved.forEach((games) => {
      games.goalscorer.forEach((goal) => {
        const time = parseInt(goal.time, 10);
        expect(time).toBeGreaterThanOrEqual(timeWindow.from);
        expect(time).toBeLessThanOrEqual(timeWindow.to);
      });
    });
  });
});

describe('filterGames', () => {
  const filtered = gameFuncs.filterGames({games, teamExclusions: ['Chelsea']});

  it('works!', () => {
    expect(true).toBe(true);
  })
})

// describe ('filterOutCards()', () => {
//   const timeWindow = {from: 0, to: 45};
//   const secondHalfCardsRemoved = gameFuncs.filterOutCards(timeWindow)(games);

//   it ('removes cards outwith time frame', () => {
//     secondHalfCardsRemoved.forEach((games) => {
//       games.cards.forEach((card) => {
//         const time = parseInt(card.time, 10);
//         expect(time).toBeGreaterThanOrEqual(timeWindow.from);
//         expect(time).toBeLessThanOrEqual(timeWindow.to);
//       });
//     });
//   });
// });

// describe ('excludeGamesThesePlayersStart()', () => {
//   const excludedPlayers = ['Bernd Leno', 'Petr Cech']
//   const gamesWithoutExclPlayers = gameFuncs
//     .excludeGamesThesePlayersStart(excludedPlayers)(games)

//   gamesWithoutExclPlayers.forEach(game => {
//     if (game.match_hometeam_name === 'Arsenal')
//       console.log(game.lineup.home.starting_lineups)

//     if (game.match_awayteam_name === 'Arsenal')
//       console.log(game.lineup.away.starting_lineups)
//   })

//   it ('excluded players should not appear in any lineup', () => {
//     gamesWithoutExclPlayers.forEach((game) => {
//       game.lineup.home.starting_lineups.forEach((player) => {
//         excludedPlayers.forEach((exclPlayer) => {
//           expect(player.lineup_player).not.toEqual(exclPlayer)
//         })
//       })
//       game.lineup.away.starting_lineups.forEach((player) => {
//         excludedPlayers.forEach((exclPlayer) => {
//           expect(player.lineup_player).not.toEqual(exclPlayer)
//         })
//       })
//     })
//   })
// })
