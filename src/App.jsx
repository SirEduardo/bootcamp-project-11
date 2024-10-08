import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import Search from "./pages/Search/Search"
import About from "./pages/About/About"
import PokemonById from "./pages/PokemonById/PokemonById"


function App() {


  return (
      <div className="h-svh">
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/about" element={<About />} />
      <Route path="/pokemon/:id" element={<PokemonById />} />
      </Routes>
      </div>
  )
}

export default App
