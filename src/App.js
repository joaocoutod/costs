import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./Components/pages/Home";
import Contato from "./Components/pages/Contato";
import Projects from "./Components/pages/Projects";
import Company from "./Components/pages/Company";
import NewProject from "./Components/pages/NewProject";

import Container from "./Components/layouts/Container";
import Navbar from "./Components/layouts/Navbar";
import Footer from "./Components/layouts/Footer"
 
function App() {
  return (
    <Router>
      <Navbar />

      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
          <Route path="/newproject" element={<NewProject></NewProject>}></Route>
          <Route path="/company" element={<Company></Company>}></Route>
          <Route path="/contato" element={<Contato></Contato>}></Route>
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;
