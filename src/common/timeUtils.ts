import dayjs from 'dayjs';
import isNil from 'lodash/isNil';
import relativeTime from 'dayjs/plugin/relativeTime';

require('dayjs/locale/en');
require('dayjs/locale/vi');

dayjs.extend(relativeTime);

export const updateLocale = (localeStr: string) => {
  dayjs.locale(localeStr);
};

export const displayTimeFromNow = (seconds?: number): string => {
  if (isNil(seconds)) return '';
  const time = dayjs.unix(seconds);
  const dayFromNow = dayjs().diff(time, 'day');
  return dayFromNow <= 2 ? time.fromNow() : time.format('MMM DD, YYYY');
};
