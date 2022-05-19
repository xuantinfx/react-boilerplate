import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootReducerState } from 'src/redux';
import { timeUtils } from 'src/common';

const DateAndTime = () => {
  const localeStr = useSelector((state: RootReducerState) => state.app.selectedLang);

  useEffect(() => {
    timeUtils.updateLocale(localeStr);
  }, [localeStr]);

  return <></>;
};

export default DateAndTime;
