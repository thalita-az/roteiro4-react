import { useState } from 'react';
import { Link } from 'react-router-dom';

function FormularioFeedback() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  const enviarFeedback = (evento) => {
    evento.preventDefault();
    setEnviado(true);
  };
  return (
    <div style={{ padding: '20px' }}>
      <h2>Formulário de Feedback</h2>

      {!enviado ? (
        <form onSubmit={enviarFeedback}>
          <label>
            Nome:{' '}
            <input value={nome} onChange={(e) => setNome(e.target.value)} />
          </label>
          <br />
          <br />
          <label>
            Mensagem:{' '}
            <input
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            />
          </label>
          <br />
          <br />
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <p>Obrigado pelo feedback, {nome}!</p>
      )}

      <br />
      <Link to="/">Voltar para o início</Link>
    </div>
  );
}

export default FormularioFeedback;
