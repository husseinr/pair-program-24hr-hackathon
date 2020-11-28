import React from 'react'
import './pageheader.scss';
import logo from '../../assets/sass-1.svg'

function PageHeader() {
    return (
        <nav>
            <h1 className="nav__header">Pain in my <img className="nav__header-logo" src={logo} alt="site-logo"></img></h1>
        </nav>
    )
}

export default PageHeader
