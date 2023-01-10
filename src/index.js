import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { configStore } from './store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configStore();
const persistor = persistStore(store);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate 
        loading={<div>Loading...</div>}
        persistor={persistor}>
        <App />
      </PersistGate> 
    </Provider>
  </React.StrictMode>
);