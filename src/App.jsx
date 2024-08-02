import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Blog from './pages/Blog.jsx';
import Silly from './pages/Silly.jsx';
import './styles/App.css'

function App() {
  return (
    <Router>
      <div className="nav-and-title">
        <div className="title">
            <a href="/"><h3>loang chiang</h3></a>
        </div>
        <div className=""></div>
            <a href="/about">about</a>
            <a href="/projects">projects</a>
            <a href="/blog">blog</a>
            <a href="/silly">silly</a>
      </div>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/silly" element={<Silly />} />
      </Routes>
    </Router>
  )
}

export default App
