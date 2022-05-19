import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import theme from 'src/shared/theme';
import { store, persistor } from 'src/redux';
import * as Locales from 'src/locales';
import { ErrorModal } from 'src/features/errorModal';
import { DateAndTime } from 'src/features/dateAndTime';
import RootRouter from './RootRouter';

Locales.initLocales();

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ChakraProvider theme={theme}>
          {/*<AppConfig />*/}
          <DateAndTime />
          <RootRouter />
          <ErrorModal />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
