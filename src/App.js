import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Company from "./pages/Company"
import NewProject from "./pages/NewProject"

import Container from "./Components/layouts/Container";
import Navbar from "./Components/layouts/Navbar";
import Footer from "./Components/layouts/Footer"
 
function App() {
  return (
    <Router>

      <ul>
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/company">Company</Link>
        <Link to="/newproject">New Project</Link>
      </ul>

      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/contato" element={<Contato></Contato>}></Route>
          <Route exact path="/company" element={<Company></Company>}></Route>
          <Route exact path="/newproject" element={<NewProject></NewProject>}></Route>
        </Routes>
      </Container>

      <p>Footer</p>
    </Router>
  );
}

export default App;
