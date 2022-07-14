import { BrowserRouter, Routes, Route } from "react-router-dom"
import Teachers from "./pages/Teachers"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/api/users" element={<Teachers />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
