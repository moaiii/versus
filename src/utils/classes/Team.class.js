// @flow
import { generateStandings } from '../functions/standings';

export default class Team {
  name;
  games = []
  squad;
  manager = ''
  standings = {}

  constructor(initName) {
    this.name = initName;
    this.squad = new Set()
  }

  getName() {
    return this.name;
  }

  setName(_name) {
    this.name = _name;
  }

  getGames() {
    return this.games;
  }

  setGames(_games) {
    this.games = _games;
  }

  getSquad() {
    return Array.from(this.squad);
  }

  setSquad(_squad) {
    this.squad = _squad;
  }

  addTosquad(player) {
    this.squad.add(player);
  }

  setStanding() {
    if(this.games.length > 0) {
      this.standings = generateStandings(this.name, this.games);
    } else {
      throw new Error(`[DEV ERROR] No games available in ${this.name} object.
        Add games to this class before generating standings`);
    }
  }
}
