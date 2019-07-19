import { selectTeam } from './StandingsTable.actions'


const standingsMiddleware = {
  /**
   * @dispatches selectTeam
   */
  '[STANDINGS TABLE] REMOVE_TEAMS': async (store, next, action) => {

    try {
      store.dispatch(selectTeam([]))
    } catch (error) {
      console.error(`[ERROR] deleting teams from the standings table\n`, error);
    }
  }
}

export { standingsMiddleware };