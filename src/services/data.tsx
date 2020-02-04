import moment from 'moment';
import { TOTAL, OVERALL } from '@/constants';

interface CountGroup {
  confirmedCount: number,
  suspectedCount: number,
  curedCount: number,
  deadCount: number,
}

interface CityDetail extends CountGroup {
  cityName: string,
}

interface AreaDetail extends CountGroup {
  provinceShortName?: string,
  updateTime: number,
  cities?: Array<CityDetail> | null,
}

interface DataItem extends CountGroup {
  updateTime: number,
  growthCount: number,
  growthRate: number,
}

export interface AreaData {
  [key: string]: Array<DataItem>
}

export function parseOverall(rawData: Array<AreaDetail>): AreaData {
  if (!rawData) {
    return {};
  }
  const filterData = groupByDay(rawData);
  const ret: AreaData = {
    [TOTAL]: []
  };
  filterData.forEach(detail => {
    const { updateTime } = detail;
    pushData(ret[TOTAL], detail, updateTime);
  });
  return ret;
}

export function parseAreaData(rawData: Array<AreaDetail>): AreaData {
  if (!rawData) {
    return {};
  }
  const filterData = groupByDay(rawData);
  const ret: AreaData = {};
  ret[TOTAL] = [];
  filterData.forEach(areaDetail => {
    const { updateTime, cities } = areaDetail;
    pushData(ret[TOTAL], areaDetail, updateTime);

    (cities || []).forEach(cityDetail => {
      const { cityName } = cityDetail;
      if (!ret[cityName]) {
        ret[cityName] = [];
      }
      pushData(ret[cityName], cityDetail, updateTime);
    });
  });
  return ret;
}

function groupByDay(rawData: Array<AreaDetail>): Array<AreaDetail> {
  interface DateMap {
    [date: string]: AreaDetail,
  }
  const dateMap: DateMap = {};
  rawData.filter(detail => detail.confirmedCount > 0)
  .forEach(detail => {
    const date = moment(detail.updateTime).format('YYYY-MM-DD');
    dateMap[date] = detail;
  });
  return Object.values(dateMap);
}

function pushData(arr: Array<DataItem>, countGroup: CountGroup, updateTime: number) {
  const { confirmedCount } = countGroup;
  const [growthCount, growthRate] = getGrowth(arr, confirmedCount);
  arr.push({
    updateTime,
    ...countGroup,
    growthCount,
    growthRate,
  });
}

function getGrowth(arr: Array<DataItem>, count: number): [number, number] {
  let growthCount = 0;
  let growthRate = 0;
  const len = arr.length;
  if (len) {
    const last = arr[len-1];
    growthCount = count - last.confirmedCount;
    growthRate = growthCount / last.confirmedCount;
  }
  return [growthCount, growthRate];
}