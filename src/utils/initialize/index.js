import { getCountries } from '../../ui/components/molecules/CountrySelector/CountrySelector.action';
import { getSeasons } from '../../ui/components/molecules/DateSelector/DateSelector.action'


export default {
  appName: 'Versus',
  getCountries: (store) => store.dispatch(getCountries.submit()),
  getSeasons: (store) => store.dispatch(getSeasons()),
}