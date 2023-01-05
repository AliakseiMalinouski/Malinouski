import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { PageItems } from '../Pages/PageItems'
import { PageDetailsItem } from '../Pages/PageDetailsItem'

export const PageRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<PageItems/>} />
            <Route path='/details/:item' element={<PageDetailsItem/>} />
        </Routes>
    )
}