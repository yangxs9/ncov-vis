import React, { useState, Fragment } from 'react';
import { Button, Select } from 'antd';
import { Location } from '@/interfaces/location';
import styles from './index.css';
import { TOTAL } from '@/constants';

const { Option } = Select;

interface CbFunc {
  (location: Location): void;
}

interface PickerPros {
  areas: Array<string>,
  cities: Array<string>,
  defaultValue: Location,
  onChange: CbFunc,
}

const LocationPicker = (props: PickerPros) => {
  const { areas, cities, defaultValue, onChange } = props;
  const [location, setLocation] = useState(defaultValue);
  
  const onAreaChange = (area: string) => {
    const newLoc = {
      area,
      city: TOTAL,
    };

    setLocation(newLoc);
    onChange(newLoc);
  }

  const onCityChange = (city: string) => {
    const newLoc = {
      area: location.area,
      city,
    };

    setLocation(newLoc);
    onChange(newLoc);
  }

  return (
    <div>
      <Select
        className={styles.select}
        value={location.area}
        onChange={onAreaChange}
        showSearch
      >
        {areas.map(area => (
          <Option key={area}>{area}</Option>
        ))}
      </Select>
      <Select
        className={styles.select}
        value={location.city}
        onChange={onCityChange}
        showSearch
      >
        {cities.map(city => (
          <Option key={city}>{city}</Option>
        ))}
      </Select>
    </div>
  );
}

export default React.memo(LocationPicker);