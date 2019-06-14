// @flow
import * as React from "react";
import { BasicSelector } from '../../atoms';


export default class DateSelector extends React.Component {
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
      setDateSelection,
      seasons
    } = this.props;

    const { } = this.state;

    const _seasonsSelector =
      <BasicSelector
        options={seasons}
        pickString={'start.year'}
        handleChangeCallback={setDateSelection}
        label={'Select season'}
      />;

    return (
      <div className={`DateSelector`}>
        <h2>3. Seasons</h2>
        {_seasonsSelector}
      </div>
    );
  }
}
