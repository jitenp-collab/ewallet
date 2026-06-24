import { StyleSheet } from 'react-native';
import React from 'react';
import Navigation from './navigations/StackNavigations/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StatusBarBackground from './reusableComponents/StatusBar';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigation>
          <StatusBarBackground />
        </Navigation>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
