import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Model from "./pages/model"
import Portfolio from './pages/portfolio'
import Projects from "./pages/projects"
import Photographers from './pages/photoGraphers'
import About from './pages/About'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model" element={<Model />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/photographers" element={<Photographers />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
