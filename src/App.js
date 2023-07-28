// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Empresa from "./pages/Empresa";

function App() {
  return (
    <Router>
      <ul>
        <li>
          <link to="/">Home</link>
        </li>
        <li>
          <link to="/empresa">empresa</link>
        </li>
        <li>
          <link to="/contato">Contato</link>
        </li>
      </ul>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/empresa" element={<Empresa />} />
        <Route exact path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
