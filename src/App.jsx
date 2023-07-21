import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'
import './App.css';

import { Navbar, Footer } from './components';
import { Home, ExerciseDetail } from './pages'

const App = () => {


return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/exercise/:id' element={<ExerciseDetail />} />
        </Routes>
        <Footer />
    </Box>
)
}

export default App