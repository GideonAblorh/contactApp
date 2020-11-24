import React, { Component } from "react";
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import AppContainer from './navigation/navigation';
import {} from 'redux-persist/integration/react'


const Stack = createStackNavigator()
function App(){
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <AppContainer/>
      </PersistGate>
    </Provider>
  );
}

export default App;

