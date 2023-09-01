import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';
import { store } from './redux/store';
import GlobalStyle from './styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-07-phonebook/">
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
