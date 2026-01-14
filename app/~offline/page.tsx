export default function OfflinePage() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      textAlign: 'center',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>📶 Estás Offline</h1>
      <p style={{ fontSize: '1.2rem', color: '#666' }}>
        Parece que no tienes conexión a internet en este momento. 
      </p>
      <p style={{ marginTop: '20px' }}>
        Las secciones que hayas visitado anteriormente seguirán funcionando, pero esta requiere conexión.
      </p>
      <button 
        onClick={() => window.location.reload()}
        style={{
          marginTop: '30px',
          padding: '10px 20px',
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Reintentar conexión
      </button>
    </div>
  );
}
