import React from 'react' 
import './Header.css'

function Header() {
  return (
    <header className='header'>
        <div>
            <h3 className='header-name'>Electronics shop</h3>
        </div>
        <div className='header-links'>
            <ul>
                <li>
                    <a>Home</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a>Signup</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a>Cart</a>
                </li>
            </ul>
        </div>
      
    </header>
  )
}

export default Header
