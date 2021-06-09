import React from 'react'
import FooterPage from '../components/FooterPage'
import HomePage from '../components/HomePage'
import Navigation from '../components/Navigation'

function index() {
    return (
        <>
        <Navigation activateOption />
        <HomePage />
        <FooterPage/>
            
        </>
    )
}

export default index
