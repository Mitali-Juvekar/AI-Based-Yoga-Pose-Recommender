import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Home from './pages/Home/Home'
import Yoga from './pages/Yoga/Yoga'
import About from './pages/About/About'
import Tutorials from './pages/Tutorials/Tutorials'
import Landing from './pages/Landing/Landing'

import './App.css'
import Recommender from './pages/Recommender/Recommender'
import RecommendationResult from './pages/Recommender/RecommedationResult'

export default function App() {
  return (<>
 
    <Router>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/start' element={<Yoga />} />
        <Route path='/about' element={<About />} />
        <Route path='/tutorials' element={<Tutorials />} />
        <Route path='/' element={<Landing />} />
        <Route path='/recommender' element={<Recommender />} />

      </Routes>
    </Router>
    </> )
}


