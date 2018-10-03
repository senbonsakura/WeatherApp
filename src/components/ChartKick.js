import React from 'react';
import _ from 'lodash';

import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'
import { Sparklines } from 'react-sparklines';

ReactChartkick.addAdapter(Chart)

const average = (data) => _.round(_.sum(data.map(item=>item[1]))/data.length);

const ChartKick = (props) => {

  return (
    <div>
      <LineChart data={props.data} title={props.units} height={180} width={300} colors={[props.color]}/>

      <div>5 Day Average: {average(props.data)} {props.units}</div>
    </div>
  );
};

export default ChartKick;
