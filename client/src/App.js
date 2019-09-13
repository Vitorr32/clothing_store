import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { Route, Switch, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import Home from './pages/Home/Home.component';
import ShopPage from './pages/Shop/Shop.component';
import Header from './components/header/header.component';
import Auth from './pages/Auth/Auth.component';
import Checkout from './pages/Checkout/Checkout.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={Checkout} />
        <Route
          exact
          path='/signin'
          render={() => (currentUser ? <Redirect to='/' /> : <Auth />)}
        />
        <Route path='/' component={Home} />
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
