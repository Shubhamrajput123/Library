
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Crud from "./components/Crud";
import UpdateBook from "./components/UpdateBook";
import Delete from "./components/Delete"
import FindBook from './components/FindBook';



function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Crud />} />   {/* Dashboard Page */}
      <Route path="/create" element={<Home />} />  {/* Add Book Form */}
      <Route path="/update/:id" element={<UpdateBook />} />  {/* Add Book Form */}
      <Route path="/delete" element={<Delete />}/>
      <Route path="/read" element={<FindBook />}/>
    </Routes>
  </Router>

  );
}

export default App;
