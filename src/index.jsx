import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import App from './components/App/App';
import { persistedStore, store } from './redux/store';
import GlobalStyle from './styles';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook/">
      <Provider store={store}>
        <PersistGate loading={undefined} persistor={persistedStore}>
          <GlobalStyle />
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
