import React from 'react'
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils'

const Header = ({currentUser}) => {
    return(
        <div className='header'>
        <Link to="/" className='logo-container'>
        <Logo className='logo'></Logo>
        </Link>


        

        <div className="options">
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {
    currentUser ?
    <div className='option' onClick={() => auth.signOut() }>SIGN OUT</div>
    :
    <Link className='option' to='/signin'>SIGN IN</Link>
}

        </div>
        </div>

 

    )
}

export default Header;