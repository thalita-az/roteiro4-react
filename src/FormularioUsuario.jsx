import { useState } from 'react';
import { Link } from 'react-router-dom';

function FormularioUsuario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  return (
    <div style={{ padding: '20px' }}>
      <h2>Cadastro de Usuário</h2>
      <form>
        <label>Nome: <input value={nome} onChange={(e) => setNome(e.target.value)} /></label>
        <br /><br />
        <label>E-mail: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
      </form>
      <h3>Dados digitados:</h3>
      <p><strong>Nome:</strong> {nome}</p>
      <p><strong>E-mail:</strong> {email}</p>
      <Link to="/">Voltar para o início</Link>
    </div>
  );
}

export default FormularioUsuario;