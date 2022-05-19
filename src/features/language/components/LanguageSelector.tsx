import React, { useEffect } from 'react';
import { Select } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { SupportedLanguage } from 'src/globals/constants';
import { RootReducerState, AppAction } from 'src/redux';

export interface Props {}

const LanguageSelector: React.FC<Props> = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const selectedLang = useSelector((state: RootReducerState) => state.app.selectedLang);

  useEffect(() => {
    if (!i18n.isInitialized) return;
    i18n.changeLanguage(selectedLang);
  }, [selectedLang, i18n]);

  const onLanguageChange = (lang: SupportedLanguage) => {
    dispatch(AppAction.setAppLanguage(lang));
  };

  return (
    <div>
      <Select
        borderRadius="full"
        value={i18n.language}
        onChange={(e) => onLanguageChange(e.target.value as SupportedLanguage)}
      >
        <option value={SupportedLanguage.EN}>🇬🇧 &nbsp;En</option>
        <option value={SupportedLanguage.VI}>🇻🇳 &nbsp;Vi</option>
      </Select>
    </div>
  );
};

export default LanguageSelector;
