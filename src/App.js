import React, { Component } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home.component';
import ShopPage from './pages/Shop/Shop.component';
import Header from './components/header/header.component';
import Auth from './pages/Auth/Auth.component';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  unsubscribeFromAuth = null;

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={Auth} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
