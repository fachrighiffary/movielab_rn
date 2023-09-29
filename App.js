import React from 'react'
import Router from 'routers'
import Provider from 'react-redux/lib/components/Provider';
import store from './src/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
