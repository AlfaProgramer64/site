export default function Home() {
  return (
    <div style={{ 
      fontFamily: 'sans-serif', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      backgroundColor: '#fafafa',
      color: '#333'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀 Sitem Yayında!</h1>
      <p style={{ fontSize: '1.2rem', color: '#666' }}>
        GitHub ve Vercel ile saniyeler içinde canlıya alındı.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <a href="https://nextjs.org" style={{ 
          padding: '10px 20px', 
          backgroundColor: '#0070f3', 
          color: 'white', 
          borderRadius: '5px', 
          textDecoration: 'none' 
        }}>
          Daha Fazla Bilgi
        </a>
      </div>
    </div>
  )
}
