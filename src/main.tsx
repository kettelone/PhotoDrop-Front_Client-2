import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { PersistGate } from 'redux-persist/integration/react';

import App from './App'
import { persistor, store } from './app/store';
import Header from './components/common/header/Header'

import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Header />
          <App/>
        </BrowserRouter>
      </PersistGate>
      </Provider>
  </React.StrictMode>
)
