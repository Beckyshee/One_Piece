
import './App.scss'
import NotFound from './Pages/404/NotFound';
import Landing from './Pages/landing/Landing'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC=()=> {


  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App
