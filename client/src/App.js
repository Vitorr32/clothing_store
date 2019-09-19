import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';

import { GlobalStyle } from './global.styles';

import { Route, Switch, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import Home from './pages/Home/Home.component';
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import ErrorBoundary from './components/error_boundary/error_boundary.component';

const Shop = lazy(() => import('./pages/Shop/Shop.component'));
const Auth = lazy(() => import('./pages/Auth/Auth.component'));
const Checkout = lazy(() => import('./pages/Checkout/Checkout.component'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route path='/shop' component={Shop} />
            <Route exact path='/checkout' component={Checkout} />
            <Route
              exact
              path='/signin'
              render={() => (currentUser ? <Redirect to='/' /> : <Auth />)}
            />
            <Route path='/' exact component={Home} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
