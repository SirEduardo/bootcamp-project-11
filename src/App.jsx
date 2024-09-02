import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import Search from "./pages/Search/Search"
import About from "./pages/About/About"


function App() {


  return (
      <div className="h-svh">
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/about" element={<About />} />
      </Routes>
      </div>
  )
}

export default App
