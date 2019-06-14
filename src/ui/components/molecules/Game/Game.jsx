// @flow
import * as React from "react";


const Game = ( {props} )=> {
  const {
    match_hometeam_name,
    match_hometeam_score,
    match_awayteam_name,
    match_awayteam_score,
  } = props;

  return(
    <div className={`Game`}>
      <p>
        {`${match_hometeam_name} ${match_hometeam_score} - ${match_awayteam_name} ${match_awayteam_score}`}
      </p>
    </div>
  )
}

export default Game;
