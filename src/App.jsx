import './App.css'
import Navbar from './components/Navbar'
import WatchList from './components/WatchList'
import MoodSelector from './components/MoodSelector'
import Movies from './components/Movies'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/mood" element={<MoodSelector />} />
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
