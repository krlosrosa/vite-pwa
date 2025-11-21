import { Link } from 'react-router';

export default function Welcome() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Bem-vindo! 👋</h1>
      <p>Você chegou à página de boas-vindas!</p>
      
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e8f5e8', borderRadius: '5px' }}>
        <h2>Página de Welcome</h2>
        <p>Esta página demonstra o funcionamento do React Router para navegação entre componentes.</p>
      </div>

      <Link to="/">
        <button 
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Voltar para Nova
        </button>
      </Link>
    </div>
  );
}