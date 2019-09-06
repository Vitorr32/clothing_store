import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home.component';
import ShopPage from './pages/Shop/Shop.component';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/shop' component={ShopPage} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
