import { Link } from 'react-router';

export default function Nova() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Página Nova</h1>
      <p>Esta é uma página informativa de teste usando React Router.</p>
      
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
        <h2>Informações da Página</h2>
        <ul>
          <li>Framework: React com TypeScript</li>
          <li>Build Tool: Vite</li>
          <li>Roteamento: React Router DOM</li>
          <li>Esta é uma demonstração de navegação entre páginas</li>
        </ul>
      </div>

      <Link to="/welcome">
        <button 
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Ir para Welcome
        </button>
      </Link>
    </div>
  );
}