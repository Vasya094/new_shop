import React from 'react'
import { connect , useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'

import './header.styles.scss'
import Korona from './logo'

const Header = ( ) => {
  const user = useSelector( state => state.user )
  const { currentUser } = user
  debugger
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
        {/* {currentUser !== null ? <Korona toggle={true}></Korona> : <Korona toggle={false}></Korona>} */}
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        { currentUser ? (
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

// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser
// })

//export default connect(mapStateToProps)(Header)
export default Header
