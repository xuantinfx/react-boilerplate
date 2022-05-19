import { IAction } from 'src/redux/types';
import * as Types from './types';

const initialState: Types.DashboardState = {
  isGettingMarketplaceSummaries: false,
  gettingMarketplaceSummariesSuccess: false,
  gettingMarketplaceSummariesMessage: '',
};

const dashboardReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default dashboardReducer;
