import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css'
import { connect  } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import { SignInAndSignUp } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import CheckOut  from './pages/checkout/checkout.component';



class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        debugger
        userRef.onSnapshot( ( snapShot ) => {
          debugger
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } 
        setCurrentUser(userAuth);
      
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/' />) : <SignInAndSignUp />} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ( {
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;
