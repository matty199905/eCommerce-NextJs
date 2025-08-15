'use client'
import React from 'react'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/Redux/store';
import { Provider } from 'react-redux';


type ReduxProviderProps = {
  children: React.ReactNode;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
       
        {children}
    
      </PersistGate>
    </Provider>
  )
}

export default ReduxProvider
