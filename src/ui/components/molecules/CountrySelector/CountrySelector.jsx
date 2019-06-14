// @flow
import * as React from "react";
import { BasicSelector } from '../../atoms';

export default class CountrySelector extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {}

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  };

  render(){
    const {
      countries,
      setSelectedCountry
    } = this.props;

    const { } = this.state;

    const _countriesSelector =
      <BasicSelector
        options={countries}
        pickString={'country_name'}
        handleChangeCallback={setSelectedCountry}
        label={'Country'}
      />;

    return (
      <div className={`CountrySelector`}>
        <h2>1. Countries</h2>
        {_countriesSelector}
      </div>
    );
  }
}
