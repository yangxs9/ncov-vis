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
  shape?: string,
  transforms: Array<Object>,
}

const Timeline = (props: TimelineProps) => {
  const { data, timeKey, valueKey, categoryKey, height, scale, transforms, color, size, shape } = props;

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
    </Chart>
  );
}


Timeline.defaultProps = {
  height: 300,
  valueKey: 'value',
  categoryKey: 'category',
  color: 'category',
  size: 2,
  shape: 'smooth',
  transforms: [],
} as Partial<TimelineProps>;

export default React.memo(Timeline);