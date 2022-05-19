import React from 'react';
import { Box } from '@chakra-ui/react';
import Select, { SelectItemRenderer } from 'react-dropdown-select';
import isEqual from 'lodash/isEqual';
import { INavigationLink } from '../types';
import MobileNavContent from './MobileNavContent';
import MobileNavItem from './MobileNavItem';

interface MobileNavProps {
  menuLinks: INavigationLink[];
  selectedMenu: INavigationLink | null;
}

const MobileNav = (props: MobileNavProps) => {
  const { menuLinks, selectedMenu } = props;
  const contentRenderer = () => {
    if (!selectedMenu) return <div>Empty</div>;
    return <MobileNavContent />;
  };

  const itemRenderer = ({ item }: SelectItemRenderer<INavigationLink>) => {
    return <MobileNavItem item={item} isSelected={isEqual(selectedMenu, item)} />;
  };
  return (
    <Box py={2}>
      <Select
        options={menuLinks}
        values={selectedMenu ? [selectedMenu] : []}
        onChange={() => {}}
        contentRenderer={contentRenderer}
        itemRenderer={itemRenderer}
        className={'sort-by'}
      />
    </Box>
  );
};

export default MobileNav;
