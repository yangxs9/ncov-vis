import React from 'react';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
} from 'bizcharts';
const DataSet = require('@antv/data-set');

interface Formatter {
  (any: any): string,
}

interface ScaleItem {
  type: string,
  alias?: string,
  formatter?: Formatter,
  tickCount?: number,
}

interface Scale {
  [key: string]: ScaleItem,
}

interface TimelineProps {
  data: Array<Object>,
  timeKey: string,
  valueKey: string,
  height: number,
  scale: Scale,
  categoryKey?: string,
  color?: any,
  size?: number,
  pointSize?: number,
  shape?: string,
  transforms: Array<Object>,
}

const Timeline = (props: TimelineProps) => {
  const { data, timeKey, valueKey, height, scale, transforms, color, size, pointSize, shape } = props;

  const ds = new DataSet();
  const dv = ds.createView().source(data || []);
  transforms.forEach(config => {
    dv.transform(config);
  });

  return (
    <Chart
      height={height}
      data={dv}
      scale={scale}
      forceFit
      padding="auto"
    >
      <Tooltip />
      <Axis name={timeKey} />
      <Axis name={valueKey} />
      <Legend />
      <Geom 
        type="line" 
        position={`${timeKey}*${valueKey}`} 
        size={size} 
        color={color} 
        shape={shape}
      />
      <Geom
        type="point"
        position={`${timeKey}*${valueKey}`} 
        size={pointSize}
        shape={"circle"}
        color={color} 
      />
    </Chart>
  );
}


Timeline.defaultProps = {
  height: 300,
  valueKey: 'value',
  categoryKey: 'category',
  color: 'category',
  size: 2,
  pointSize: 3,
  shape: 'smooth',
  transforms: [],
} as Partial<TimelineProps>;

export default React.memo(Timeline);