import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import TeamPage from '../components/Teams'
import CaseStudyPage from '../components/CaseStudy'
const MainRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/case-study" element={<CaseStudyPage />} />
                <Route path="/team" element={<TeamPage />} />
            </Routes>
        </>
    )
}

export default MainRouter
