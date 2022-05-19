import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { Colors } from 'src/shared';
import { useTranslation } from 'react-i18next';
import { LinkButton } from 'src/components/Button';
import { useGetSecondaryHeaderBarHeight } from 'src/hooks';
import { INavigationLink } from '../types';

export interface DashboardNavLinkProps {
  item: INavigationLink;
  isActive: boolean;
  onClick?: () => any;
  showUnderline?: boolean;
}

const DashboardNavLink = (props: DashboardNavLinkProps) => {
  const { item, isActive = false, onClick, showUnderline = true } = props;
  const { route, label } = item;
  const { t } = useTranslation();
  const secondaryHeaderBarHeight = useGetSecondaryHeaderBarHeight();
  const defaultBottom = useColorModeValue('transparent', 'transparent');
  const activeBottom = useColorModeValue(Colors.dark.primary, Colors.dark.primary);
  const color = useColorModeValue('main', 'gray.200');

  const borderColor = isActive ? activeBottom : defaultBottom;
  const name = t(label);
  return (
    <LinkButton
      color={color}
      fontWeight={'bold'}
      pos={'relative'}
      to={route}
      minW={'120px'}
      h={secondaryHeaderBarHeight}
      justifyContent={'center'}
      alignItems={'center'}
      display={'inline-flex'}
      onClick={onClick}
    >
      {name}
      {showUnderline && isActive && (
        <Box
          bottom={0}
          left={0}
          right={0}
          pos={'absolute'}
          height="3px"
          width="full"
          bg={borderColor}
        />
      )}
    </LinkButton>
  );
};
export default DashboardNavLink;
