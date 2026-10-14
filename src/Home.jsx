import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Página Inicial</h1>
      <p>Bem-vindo à aplicação React com rotas!</p>

      <Link to="/formulario">
        <button>Acessar Formulário</button>
      </Link>

      <br /><br />

      <Link to="/feedback">
        <button>Deixar Feedback</button>
      </Link>
    </div>
  );
}

export default Home;