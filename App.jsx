import React, {StrictMode} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {defaultTheme} from './src/themes';
import store, {persistor} from './src/redux/store';
import {RootNavigator} from './src/navigators';
import i18next from './src/localization/i18next';

const App = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider theme={defaultTheme}>
            <SafeAreaProvider>
              <NavigationContainer>
                <RootNavigator />
              </NavigationContainer>
            </SafeAreaProvider>
          </PaperProvider>
        </PersistGate>
      </Provider>
    </StrictMode>
  );
};

export default App;
