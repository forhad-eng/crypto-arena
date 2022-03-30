import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Coins from './components/Coins/Coins'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/coins" element={<Coins></Coins>} />
                <Route path="/contact" element={<Contact></Contact>} />
                <Route path="/about" element={<About></About>} />
            </Routes>
        </div>
    )
}

export default App
