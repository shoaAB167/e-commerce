import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { lazy } from "react"
import { Suspense } from "react"
import Loader from "./components/loader"

const Home = lazy(() => import("./pages/home"))
const Search = lazy(() => import("./pages/search"))
const Cart = lazy(() => import("./pages/cart"))

const App = () => {
  return (
  <Router>
    <Suspense fallback = {<Loader />}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </Suspense>
  </Router>
  )
}

export default App