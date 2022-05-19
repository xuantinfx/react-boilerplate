import { useSelector } from 'react-redux';
import { RootReducerState } from 'src/redux';

const useAuth = () => {
  const signedIn = useSelector((state: RootReducerState) => state.auth.signedIn);
  const autoLoginChecked = useSelector((state: RootReducerState) => state.auth.autoLoginChecked);
  return [signedIn, autoLoginChecked];
};

export default useAuth;
