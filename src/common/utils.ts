import isNaN from 'lodash/isNaN';
export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const convertStringToNumber = (str?: string) => {
  const value = Number(str);
  return isNaN(value) ? 0 : value;
};
