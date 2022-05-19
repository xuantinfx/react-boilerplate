import React from 'react';
import { Button, ButtonProps, Image } from '@chakra-ui/react';
import { AppSizes, Resources } from 'src/shared';
import { useDispatch } from 'react-redux';
import { AppAction } from 'src/redux';

const ToggleMobileMenuButton = (props: ButtonProps) => {
  const { children, ...remainingProps } = props;

  const dispatch = useDispatch();
  const onOpenMenu = () => {
    dispatch(AppAction.toggleMobileNavbar(true));
  };

  return (
    <Button p={0} bg={'transparent'} {...remainingProps} onClick={onOpenMenu}>
      <Image boxSize={AppSizes.Icon} objectFit="cover" src={Resources.svgs.menu} />
    </Button>
  );
};

export default ToggleMobileMenuButton;
