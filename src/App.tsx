import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
function App() {

  return (
    <div className="" style={{ scrollBehavior: "smooth" }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
