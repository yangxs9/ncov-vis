import React, { useState } from 'react';
import { useAsync } from '@umijs/hooks';
import moment from 'moment';
import useHistory from '@/hooks/useHistory';
import { getAreas } from '@/services/api';
import { Table, Spin, Alert } from 'antd';
import LocationPicker from '@/components/LocationPicker';
import Timeline from '@/components/Timeline';
import { get } from 'lodash-es';
import styles from './index.css';

const valueKey = 'count';
const timeKey = 'updateTime';
const categoryKey = 'category';
interface Row {
  [key: string]: any,
}

interface CatMap {
  [key: string]: string,
}
const catTitle: CatMap = {
  confirmedCount: '确诊',
  // suspectedCount: '疑似',
  deadCount: '死亡',
  curedCount: '治愈',
}
const catColor: CatMap = {
  '确诊': '#F04864',
  '疑似': '#FACC14',
  '死亡': '#4d5054',
  '治愈': '#2FC25B',
};
const color = [categoryKey, (cat: string) => catColor[cat]];

const transforms = [{
  type: 'rename',
  map: catTitle,
}, {
  type: 'fold',
  fields: Object.values(catTitle),
  key: categoryKey,
  value: valueKey,
}, {
  type: 'filter',
  callback(row: Row) {
    return row[valueKey] > 0;
  }
}];

const scale = {
  [valueKey]: {
    type: 'linear',
    alias: '人数',
  },
  [timeKey]: {
    type: 'time',
    alias: '时间',
    mask: 'M.D',
    tickInterval: 60*60*24*1000,
  },
  [categoryKey]: {
    type: 'cat',
    alias: '类型',
  }
};

const columns: Array<Object> = [{
  title: '时间',
  dataIndex: timeKey,
  key: timeKey,
  render: (time: number) => moment(time).format('YYYY-MM-DD'),
  sorter: (a: Row, b: Row) => a[timeKey] - b[timeKey],
  defaultSortOrder: 'descend',
}];
columns.push(...Object.keys(catTitle).map(key => ({
  title: catTitle[key],
  dataIndex: key,
  key,
  render: (num: number) => num ? num.toString() : '-',
})));

const defaultLocation = {
  area: '湖北省',
  city: '武汉',
};

export default function() {
  const { data: areas = [], loading: areaLoading, error: areaError } = useAsync(getAreas, []);

  const [location, setLocation] =  useState(defaultLocation);

  const [areaData, loading, error] = useHistory(location.area);
  const cities = Object.keys(areaData || {});
  const cityData = get(areaData, location.city) || [];

  return (
    <div className={styles.normal}>
      {areaError && <Alert message="错误：获取区域列表失败，请刷新重试" type="error" className={styles.error} />}
      <LocationPicker 
        areas={areas}
        cities={cities}
        defaultValue={defaultLocation}
        onChange={setLocation}
      />
      {error && <Alert message="错误：获取地区历史数据失败，请刷新重试" type="error"  className={styles.error} />}
      {loading ? <Spin /> :
      <div className={styles.timeline}>
        <Timeline
          data={cityData}
          valueKey={valueKey}
          timeKey={timeKey}
          categoryKey={categoryKey}
          scale={scale}
          transforms={transforms}
          color={color}
        />
      </div>}
      <Table
        dataSource={cityData}
        rowKey={timeKey}
        columns={columns}
        pagination={{ pageSize: 20, hideOnSinglePage: true }}
        loading={loading}
        bordered
      />
    </div>
  );
}
