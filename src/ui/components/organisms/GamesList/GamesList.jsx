import * as React from "react";
import { Game } from '../../molecules';

export default class GamesList extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {}

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  };

  render() {
    const {
      games
    } = this.props;

    const {} = this.state;

    const _gamesList = games
      .map((game, i) => <Game key={game.match_id} game={game} />);

    return (
      <div className={`GamesList`}>
        {_gamesList}
      </div>
    );
  }
}
