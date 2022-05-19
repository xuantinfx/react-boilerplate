import React from 'react';
import { DashboardIcon } from 'src/shared/svgComponents';
import { AppSizes } from 'src/shared';
import { MenuLabel } from 'src/globals/constants';

interface MenuIconProps {
  label?: string;
  color?: string;
}
const MenuIcon = (props: MenuIconProps) => {
  const { label, color } = props;
  switch (label) {
    case MenuLabel.DASHBOARD:
      return <DashboardIcon width={AppSizes.MenuIcon} height={AppSizes.MenuIcon} color={color} />;
  }
  return null;
};
export default MenuIcon;
