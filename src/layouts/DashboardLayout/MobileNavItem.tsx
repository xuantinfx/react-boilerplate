import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Colors } from 'src/shared';
import { LinkButton } from 'src/components';
import { INavigationLink } from '../types';

interface Props {
  item: INavigationLink;
  isSelected: boolean;
}

const MobileNavItem: React.FC<Props> = (props) => {
  const bg = useColorModeValue(Colors.dark.bg, Colors.dark.bg);
  const text = useColorModeValue(Colors.dark.text, Colors.dark.text);
  const activeText = useColorModeValue(Colors.dark.primary, Colors.dark.primary);
  const { item, isSelected } = props;
  const { t } = useTranslation();

  return (
    <LinkButton
      key={item.label}
      py={2}
      px={4}
      textAlign="left"
      color={isSelected ? activeText : text}
      _hover={{ backgroundColor: isSelected ? 'mainBg' : 'active' }}
      bg={bg}
      to={item.route}
    >
      {t(item.label)}
    </LinkButton>
  );
};

export default MobileNavItem;
