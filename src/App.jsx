import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import FormularioUsuario from './FormularioUsuario';
import FormularioFeedback from './FormularioFeedback';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<FormularioUsuario />} />
        <Route path="/feedback" element={<FormularioFeedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
