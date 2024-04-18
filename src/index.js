import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import { StyledEngineProvider } from '@mui/material/styles';

import ThemeWrapper from 'components/ThemeWrapper/ThemeWrapper';
import { CssBaseline } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter basename="Slimmom">
        <Provider store={store}>
          <ThemeWrapper>
            <CssBaseline />
            <App />
          </ThemeWrapper>
        </Provider>
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);
