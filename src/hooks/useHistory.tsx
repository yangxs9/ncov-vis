import { useMemo } from 'react';
import { useAsync } from '@umijs/hooks';
import { getAreaData, getOverall } from '@/services/api';
import { AreaData, parseAreaData, parseOverall } from '@/services/data';
import { OVERALL } from '@/constants';

function getData(area: string) {
  if (area === OVERALL) {
    return getOverall({ latest: 0 });
  }
  return getAreaData({
    province: area,
    latest: 0,
  });
}

function parseData(data:any, area: string) {
  if (area === OVERALL) {
    return parseOverall(data);
  }
  return parseAreaData(data);
}

const useHistory = (area: string): [AreaData, boolean, any] => {
  const { data, loading, error } = useAsync(() => getData(area), [area]);
  const historyData = useMemo(() => parseData(data, area), [data, area]) ;
  
  return [ historyData, loading, error ];
};

export default useHistory;