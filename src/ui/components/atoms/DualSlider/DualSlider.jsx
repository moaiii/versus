// @flow
import * as React from "react";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './DualSlider.scss';

const DualSlider = (props) => {
  const {
    className,
    min,
    max,
    marks,
    defaultValues,
    tipFormatter, // function
    onChange
  } = props;

  return(
    <div className={`DualSlider`}>
      <div style={null}>
        <Range
          onAfterChange={onChange}
          marks={marks}
          className={className}
          min={min}
          max={max}
          defaultValue={defaultValues}
          tipFormatter={tipFormatter} />
      </div>
    </div>
  )
};



export default DualSlider;
