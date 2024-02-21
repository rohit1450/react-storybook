import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './component/ui/Dashboard/Dashboard';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard heading='asdf' content='asdfa' />} />
          <Route path="/about" element={<Dashboard heading='asdf' content='asdfa' />} />
          <Route path="/contact" element={<Dashboard heading='asdf' content='asdfa' />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App
