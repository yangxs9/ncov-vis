import { stringify } from 'qs';
import request from '@/utils/request';
import { get } from 'lodash-es';

export async function getAreas() {
  return request('https://lab.ahusmart.com/nCoV/api/provinceName')
  .then(data => get(data, 'results'));
}

export async function getAreaData(params: Object, options?: Object | undefined) {
  return request(`https://lab.ahusmart.com/nCoV/api/area?${stringify(params)}`, options)
  .then(data => get(data, 'results'));
}

export async function getOverall(params: Object, options?: Object | undefined) {
  return request(`https://lab.ahusmart.com/nCoV/api/overall?${stringify(params)}`, options)
  .then(data => get(data, 'results'));
}

export async function getIPInfo(ip: string) {
  return request(`http://iploc.market.alicloudapi.com/v3/ip?ip=${ip}`, {
    headers: {
      'Authorization': 'APPCODE 6e02533fc3144b9bbf60996caab90f96',
    },
  });
}