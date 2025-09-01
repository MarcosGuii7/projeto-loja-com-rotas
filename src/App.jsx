import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout/Layout"

import Home from "./Pages/Home"
import About from "./Pages/About"
import Users from "./Pages/Users"
import Partners from "./Pages/Partners"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="users" element={<Users/>} />
        <Route path="partners" element={<Partners/>} />
      </Route>
    </Routes>
  )
}
