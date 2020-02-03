import moment from 'moment';

interface CityDetail {
  cityName: string,
  confirmedCount: number,
  suspectedCount: number,
  curedCount: number,
  deadCount: number,
}

interface AreaDetail {
  provinceShortName: string,
  confirmedCount: number,
  suspectedCount: number,
  curedCount: number,
  deadCount: number,
  updateTime: number,
  cities: Array<CityDetail> | null,
}

interface DataItem {
  updateTime: number,
  confirmedCount: number,
  suspectedCount: number,
  curedCount: number,
  deadCount: number,
}

export interface AreaData {
  [key: string]: Array<DataItem>
}

export function getHistoryData(rawData: Array<AreaDetail>): AreaData {
  if (!rawData) {
    return {};
  }
  const filterData = filterByDay(rawData);
  const totalKey = '总计';
  const ret: AreaData = {};
  ret[totalKey] = [];
  filterData.forEach(areaDetail => {
    const { confirmedCount, suspectedCount, curedCount, deadCount, updateTime, cities } = areaDetail;
    ret[totalKey].push({
      updateTime,
      confirmedCount,
      suspectedCount,
      curedCount,
      deadCount,
    });

    (cities || []).forEach(cityDetail => {
      const { cityName } = cityDetail;
      if (!ret[cityName]) {
        ret[cityName] = [];
      }
      ret[cityName].push({
        updateTime,
        confirmedCount: cityDetail.confirmedCount,
        suspectedCount: cityDetail.suspectedCount,
        curedCount: cityDetail.curedCount,
        deadCount: cityDetail.deadCount,
      });
    });
  });
  return ret;
}

function filterByDay(rawData: Array<AreaDetail>): Array<AreaDetail> {
  interface DateMap {
    [date: string]: AreaDetail,
  }
  const dateMap: DateMap = {};
  rawData.forEach(detail => {
    const date = moment(detail.updateTime).format('YYYY-MM-DD');
    dateMap[date] = detail;
  });
  return Object.values(dateMap);
}