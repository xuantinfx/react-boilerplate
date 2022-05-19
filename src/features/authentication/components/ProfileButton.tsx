import React from 'react';
import { useSelector } from 'react-redux';
import { RootReducerState } from '../../../redux';
import MyAccountButton from '../../../components/MyAccountButton';
import LoginButton from '../../../components/LoginButton';

interface ProfileButtonProps {}

const ProfileButton = (props: ProfileButtonProps) => {
  const signedIn = useSelector((state: RootReducerState) => state.auth.signedIn);
  if (signedIn) {
    return <MyAccountButton />;
  }
  return <LoginButton />;
};

export default ProfileButton;
