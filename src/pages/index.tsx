import React, { useState, useEffect } from 'react';
import { useAsync } from '@umijs/hooks';
import moment from 'moment';
import useHistory from '@/hooks/useHistory';
import { getAreas, getIPInfo } from '@/services/api';
import { Table, Spin, Alert } from 'antd';
import LocationPicker from '@/components/LocationPicker';
import Timeline from '@/components/Timeline';
import { get } from 'lodash-es';
import styles from './index.css';
import { TOTAL, OVERALL } from '@/constants';

const userIP = get(window,'returnCitySN.cip');

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
  growthCount: '新增',
  deadCount: '死亡',
  curedCount: '治愈',
  suspectedCount: '疑似',
}
const catColor: CatMap = {
  '确诊': '#F04864',
  '新增': '#1890FF',
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

const columns: Array<Object> = [{
  title: '时间',
  dataIndex: timeKey,
  key: timeKey,
  render: (time: number) => moment(time).format('M.D'),
  sorter: (a: Row, b: Row) => a[timeKey] - b[timeKey],
  defaultSortOrder: 'descend',
  // width: 60,
}];

columns.push(...Object.keys(catTitle).map(key => ({
  title: catTitle[key],
  dataIndex: key,
  key,
  render: (num: number) => num ? num.toString() : '-',
})));

columns.splice(3, 0, {
  title: '增长率',
  dataIndex: 'growthRate',
  key: 'growthRate',
  render: (rate: number) => rate ? `${(rate * 100).toFixed(2)}%` : '-',
});

const defaultLocation = {
  area: OVERALL,
  city: TOTAL,
};

export default function() {
  const { data: areas = [], loading: areaLoading, error: areaError } = useAsync(getAreas, []);

  const [location, setLocation] =  useState(defaultLocation);
  useEffect(() => {
    if (!userIP || areas.length === 0) return;
    getIPInfo(userIP).then(res => {
      const province = get(res, 'data.prov');
      if (!province) return;
      for (let i = 0; i < areas.length; i++) {
        if (areas[i].includes(province)) {
          setLocation({
            area: areas[i],
            city: TOTAL,
          });
          break;
        }
      }
    });
  }, [areas]);

  const [areaData, loading, error] = useHistory(location.area);
  const cities = Object.keys(areaData || {});
  const cityData = get(areaData, location.city) || [];

  const scale = {
    [valueKey]: {
      type: 'linear',
      alias: '人数',
    },
    [timeKey]: {
      type: 'timeCat',
      alias: '时间',
      mask: 'M.D',
      tickCount: cityData.length,
    },
    [categoryKey]: {
      type: 'cat',
      alias: '类型',
    }
  };

  return (
    <div className={styles.normal}>
      {areaError && <Alert message="错误：获取区域列表失败，请刷新重试" type="error" className={styles.error} />}
      <LocationPicker 
        areas={[OVERALL].concat(areas)}
        cities={cities}
        value={location}
        // defaultValue={defaultLocation}
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
        scroll={{ x: 420 }}
        size="small"
        loading={loading}
        bordered
      />
    </div>
  );
}
