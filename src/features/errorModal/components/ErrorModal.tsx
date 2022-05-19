import React from 'react';
import { useSelector } from 'react-redux';
import ErrorModalComponent from 'src/components/ErrorModal';
import { RootReducerState } from 'src/redux';
import useErrorModal from '../hooks/useErrorModal';

const ErrorModal = () => {
  const isOpenErrorModal = useSelector((state: RootReducerState) => state.app.isOpenErrorModal);
  const errorModalMessage = useSelector((state: RootReducerState) => state.app.errorModalMessage);
  const [, closeErrorModal] = useErrorModal();

  return (
    <ErrorModalComponent
      isOpen={isOpenErrorModal}
      onClose={closeErrorModal as () => void}
      errorMessage={errorModalMessage}
    />
  );
};

export default ErrorModal;
