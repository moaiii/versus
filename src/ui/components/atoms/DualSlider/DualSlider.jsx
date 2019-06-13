// @flow
import * as React from "react";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const DualSlider = ({props}) => {
  const {
    className,
    min,
    max,
    defaultValues,
    tipFormatter, // function
    onChange
  } = props;

  return(
    <div className={`DualSlider`}>
      <div style={wrapperStyle}>
        <Range
          onAfterChange={onChange}
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
