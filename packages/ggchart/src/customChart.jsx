import React, { useState, useEffect } from 'react';
import {
  Chart,
  Point,
  Annotation,
  Axis,
  Coordinate,
  registerShape,
} from 'bizcharts/es';

import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

// 自定义Shape 部分
registerShape('point', 'pointer', {
  draw(cfg, container) {
    const group = container.addGroup();

    const center = this.parsePoint({ x: 0, y: 0 }); // 获取极坐标系下画布中心点
    const start = this.parsePoint({ x: 0, y: 0.5 }); // 获取极坐标系下起始点


    const preAngle = this.preAngle || 0;

    const angle1 = Math.atan((start.y - center.y) / (start.x - center.x));
    const angle = (Math.PI - 2 * (angle1)) * cfg.points[0].x;

    this.preAngle = angle;

    return group;
  },
});

const defaultHeight = 300;
const padding = 'auto';

function Gauge(props) {
  const { data, height, width, options } = props;
  const key = options.value;

  if ( !data || !data.length || !(key in data[data.length-1])) {
    return <div>caonnt display this measure with current query</div>;
  }

  const scale = {};
  scale[key] = {
    min: 0,
    max: 1,
    tickInterval: 0.1,
    formatter: v => v * 100
  }

  return (
    <Chart
      height={400}
      data={data}
      scale={scale}
      autoFit
      animate={false}
    >
      <Coordinate
        type='polar'
        radius={0.75}
        startAngle={(-1.4) * Math.PI}
        endAngle={(0.4) * Math.PI}
      />
      <Axis
        name={key}
        line={null}
        visible={false}
        label={{
          offset: -36,
          style: {
            fontSize: 18,
            textAlign: 'center',
            textBaseline: 'middle',
          },
        }}

        grid={null}
      />
      <Point
        position={key + '*1'}
        color='#1890FF'
        shape='pointer'
      />
      <Annotation.Arc
        start={[0, 1]}
        end={[1, 1]}
        style={{
          stroke: '#278e6b',
          lineWidth: 30,
          lineDash: null,
          lineCap: 'round',
        }}
      />
      <Annotation.Arc
        start={[0, 1]}
        end={[data[0][key], 1]}
        style={{
          stroke: '#ca242d',
          lineCap: 'round',
          lineWidth: 30,
          lineDash: null,
        }}
      />
      <Annotation.Text
        position={['50%', '50%']}
        content={`${Math.round(data[0][key] * 100)}%`}
        style={{
          fontSize: 50,
          fill: '#278e6b',
          textAlign: 'center',
        }}
      />
    </Chart>
  )
}

function Measure(props) {
  const { data, options, height, width } = props;
  const key = options.value;

  if ( !data || !data.length || !(key in data[data.length-1])) {
    return <div>caonnt display this measure with current query</div>;
  }

  const value = data[data.length - 1][key];
  const displayValue = Number.isInteger(value) ? value : Number(data[data.length - 1][key]).toFixed(2);
  const values = data.map((item) => (item[key]));

  const containerStyle = {
    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'align-self': 'center',
    'align-items': 'center',
    height:"100%"
  };

  const measureStyle = {
    fontSize: 50,
    fill: '#278e6b',
    textAlign: 'center',
    margin: '1px',
  }

  return (
    <div style={containerStyle}>
      <p style={measureStyle}>{displayValue}</p>
      <div style={{
        width:width * 0.5,
        justifyContent:'center'
      }}>
        <Sparklines data={values} limit={20} width={width * 0.5} height={height * 0.2} margin={2} style={{
          display:'flex',
          justifyContent:'center'
        }}>
          <SparklinesLine color='#ca242d' />
          <SparklinesSpots style={{ fill: '#278e6b' }} />
        </Sparklines>
      </div>
    </div>
  )
}

export default function CustomChart(props) {
  const { data, options, height, width } = props;

  if (options.type === 'gauge') {
    return <Gauge data={data} height={height} width={width} options={options} />
  }

  if (options.type === 'measure') {
    return <Measure data={data} height={height} width={width} options={options} />
  }

  return <div />

}