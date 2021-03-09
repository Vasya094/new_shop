import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'

import './header.styles.scss'
import Korona from './logo'

const Header = ( { currentUser } ) => {
  // const logo = 
  debugger
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        {/* <Logo className="logo" /> */}
        {currentUser ? <Korona toggle={true}></Korona> : <Korona toggle={false}></Korona>}
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>SIGN IN</Link>
        )}
      </div>
    </div>
  );
}

export default Header
