// react
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// material-ui
import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// components
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { ProList } from './components/views/ProList/ProList';
import { Order } from './components/views/Order/Order';
import { NotFound } from './components/views/NotFound/NotFound';
import { ProLogin } from './components/features/ProLogin/ProLogin';
import { ProSignup } from './components/features/ProSignup/ProSignup';
import { ProPage } from './components/views/ProPage/ProPage';


// const theme = createMuiTheme({
//   palette: {
//     primary: { main: '#ab003c' },
//     secondary: { main: '#ffee33', light: '#eae6e6' },
//   },
// });

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#bb3363',
      main: '#ab003c',
      dark: '#77002a',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffee33',
      //light: '#eae6e6',
      light: '#eee',
      dark: '#b2a300',
      contrastText: '#000',
    },
  },
});


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path={'/professionals'} component={ProList} />
              <Route exact path={'/pro'} component={ProPage} />
              <Route exact path={'/order'} component={Order} />
              <Route exact path={'/prologin'} component={ProLogin} />
              <Route exact path={'/prosignup'} component={ProSignup} />
              <Route path='*' component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
