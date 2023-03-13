import ShowHabbits from "./ShowHabbits"

import PreviousUpdates from "./PreviousUpdates"

import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom"
function App() {
  // console.log("APP COMPONENT CALLED")
  return (
    <div className="App">
      <Router>
      <nav>
      <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/details">
            <button>Go to Details</button>
          </Link>
        </nav>

        <Routes>
          <Route exact path="/" element={<ShowHabbits />} />

          <Route exact path="/details" element={<PreviousUpdates />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
