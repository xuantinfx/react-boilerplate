import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en-US';
import vi from './vi-VN';

export const initLocales = () => {
  // eslint-disable-next-line import/no-named-as-default-member
  i18n.use(initReactI18next).init({
    defaultNS: 'Common',
    resources: {
      en,
      vi,
    },
    lng: 'vi',
    fallbackLng: 'en',
    interpolation: {},
  });
};
