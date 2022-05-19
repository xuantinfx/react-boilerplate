import orderBy from 'lodash/orderBy';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import * as appUtils from './utils';

// Function use to standardize value when getting info from BE to show on web
export const standardizeDataToShowed = (value?: number) => {
  if (value) return value / 100; // because data on contract not use float number, so must be / 100 before to show
  return 0;
};

export const standardizeMultipleSelectionData = (
  data: string | string[],
  convertData = appUtils.convertStringToNumber
) => {
  if (isEmpty(data)) {
    return undefined;
  }
  if (!Array.isArray(data)) {
    data = [data];
  }
  return orderBy(map(data, (e) => convertData(e)));
};

export const standardizeRangeSelectionData = (
  data: string | string[],
  convertData = appUtils.convertStringToNumber
) => {
  if (isEmpty(data) || !Array.isArray(data)) {
    return undefined;
  }
  return orderBy(map(data, (e) => convertData(e)));
};
