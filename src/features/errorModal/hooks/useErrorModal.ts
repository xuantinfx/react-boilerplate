import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AppAction } from 'src/redux';

const useErrorModal = () => {
  const dispatch = useDispatch();
  const openErrorModal = useCallback(
    (errorMessage: string) => {
      dispatch(AppAction.openErrorModal(errorMessage));
    },
    [dispatch]
  );

  const closeErrorModal = useCallback(() => {
    dispatch(AppAction.closeErrorModal());
  }, [dispatch]);
  return [openErrorModal, closeErrorModal];
};

export default useErrorModal;
