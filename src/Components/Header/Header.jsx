import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>

      <Link to='/' style={{'textDecoration':'none','color':'#EA5455'}}> 
        <h1>FakeStore</h1>
</Link>
        <Link to='/logout'>
        <button className='logout-button'>Logout</button>
        </Link>
    </header>
  )
}

export default Header