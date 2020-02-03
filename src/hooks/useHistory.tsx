import { useMemo } from 'react';
import { useAsync } from '@umijs/hooks';
import { getAreaData } from '@/services/api';
import { AreaData, getHistoryData } from '@/services/data';

const useHistory = (province: string): [AreaData, boolean, any] => {
  const { data, loading, error } = useAsync(() => getAreaData({
    province,
    latest: 0,
  }), [province]);
  const historyData = useMemo(() => getHistoryData(data), [data, province]) ;
  
  return [ historyData, loading, error ];
};

export default useHistory;