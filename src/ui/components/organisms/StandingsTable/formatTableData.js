
function createData(Position, Club, Played, Won, Drawn, Lost, GF, GA, GD, Points) {
  return { Position, Club, Played, Won, Drawn, Lost, GF, GA, GD, Points };
}


const formatTableData = (data) => {
  return data
    .map((el, index) => {
      const {standings} = el;
      return {
        Position: index + 1,
        Club: el.name,
        Played: standings.gamesTotal.played,
        Won: standings.gamesTotal.won,
        Drawn: standings.gamesTotal.drawn,
        Lost: standings.gamesTotal.lost,
        GF: standings.goals.for,
        GA: standings.goals.against,
        GD: standings.goals.difference,
        Points: standings.pointsTotal
      }
    });
}

export { formatTableData };