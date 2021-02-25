import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
// Import the Components
import HomePage from './page/homepage/homepage.component';
import Header from './Components/header/header.component';
import ShopPage from './page/shop/shop.component';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
