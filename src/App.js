import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
// Import the Components
import HomePage from './page/homepage/homepage.component';
import Header from './Components/header/header.component';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUp from './page/Sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth , CreateUserProfileDocument } from './firebase/firebase.utils'



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      CreateUserProfileDocument(user);

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
