
/** @param {Array<string>} teamName e.g. Celtic */
const removeTeamsFromGameData = (teamNames) => {
  if (!Array.isArray(teamNames)) {
    throw new Error('removeTeamsFromGameData > you have not supplied an array');
  }

  const teamNamesFlattened = teamNames
    .map(team => team.toLowerCase());

  /** @param {Array<Object>} games array list of game data objects */
  return (games) => {
    const prunedGames = games
      .filter(game => {
        const foundHomeTeam = teamNamesFlattened
          .includes(game.match_hometeam_name.toLowerCase());

        const foundAwayTeam = teamNamesFlattened
          .includes(game.match_awayteam_name.toLowerCase());

        return !foundHomeTeam && !foundAwayTeam;
      });

    return prunedGames;
  }
}

module.exports = { removeTeamsFromGameData };