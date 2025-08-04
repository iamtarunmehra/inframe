'use client'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import myStore from '../store/store'
import { Provider } from 'react-redux'

export default function MainLayout({ children }) {
    return (
        <Provider store={myStore}>
            <Header />
            {children}
            <Footer />
        </Provider>
    )
}
