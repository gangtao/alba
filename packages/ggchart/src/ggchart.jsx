import React, { PureComponent } from 'react';
import { Axis, Chart, Geom, Tooltip, Coordinate } from 'bizcharts/es';
import CustomChart from './customChart'

const defaultHeight = 300;
const padding = 'auto';

class GGChart extends PureComponent {

  render() {
    console.log("render ggchart element!");

    const { data, metadata, height, width } = this.props;
    const colors = ["#ca242d", "#cc6f12", "#13805b", "#1066d0"];

    let grammar = {};
    
    if ( metadata && metadata.visualization ) {
      grammar = metadata.visualization;
    }

    const makeData = function () {
      if ( !data ||!metadata || !metadata.dataSchema) {
        return {};
      }

      const schema = metadata.dataSchema;

      const resultData = data.map(row => {
        const rowObject = {};
        for (let i = 0; i < row.length; i++) {
          rowObject[schema[i]['colName']] = row[i];
        }
        return rowObject;
      });
      return resultData;
    }

    const resultData = makeData();

    if ( 'visualization' in metadata &&  metadata.visualization && 'is_custom' in metadata.visualization && metadata.visualization.is_custom) {
      // TODO make customer chart
      return <CustomChart height={height}
              data={resultData}
              width={width}
              options={metadata.visualization.options}
             /> 
      
    } else {
      return (<Chart
        height={ height || defaultHeight}
        autoFit
        data={resultData}
        padding="auto"
        notCompareData={true}
        animate={{
          animation: 'fadeIn', // 动画名称
          easing: 'easeInQuart', // 动画缓动效果
          delay: 100, // 动画延迟执行时间
          duration: 400 // 动画执行时间
          }}
      >
        { 
            grammar.position && grammar.position.split('*').map((elem)=>
              <Axis key={elem} name={elem} label={{
                formatter: (text)=>{
                  const v = metadata.dataSchema.find((schema)=>schema.colName === elem );
                  const time = Number((Number(text)*1000).toFixed())
                  return v.colType === 'datetime' ? 
                          new Date(time).toDateString()
                          : text;
                }
              }}/>
            )
        }
        
        <Coordinate type={grammar.coordinate} />
        <Geom
          position={grammar.position}
          type={grammar.type}
          color={ grammar.color ?  [grammar.color, colors] : colors[0]}
          shape={grammar.shape}
          lable={grammar.label}
          size={grammar.size}
          adjust={grammar.adjust}
        />
        <Tooltip shared />
      </Chart>)
    }
  }    
}

export default function Visualization(props) {
  const { data, metadata, height, width } = props;

  console.log("render visualization element!");

  if ( !metadata || ! metadata.dataType) {
    console.log("render empty data!");
    return (<div/>);
  }

  if ( metadata.dataType === "table") {
    return (
      <GGChart data={data} metadata={metadata} height={height} width={width}/>
    );
  }

  return (
    <></>
  );

}
