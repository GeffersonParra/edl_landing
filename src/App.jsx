import { BrowserRouter, Routes, Route } from 'react-router'
import { Home } from './Home'
import { AboutUs } from './AboutUs'
import { Posts } from './Posts'
import { Projects } from './Projects'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about_us' element={<AboutUs/>} />
        <Route path='/posts' element={<Posts/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
