import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from './components/Main.jsx'
import './reset.scss'
import './App.scss'

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/user/:id" element={<Main />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
