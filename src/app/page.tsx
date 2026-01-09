export default function Home() {
  return (
    <div style={{ 
      fontFamily: 'system-ui, sans-serif', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column',
      backgroundColor: '#f0f2f5' 
    }}>
      <h1 style={{ color: '#0070f3' }}>Next.js + Vercel Yayında!</h1>
      <p>Bu site tamamen GitHub üzerinden oluşturuldu.</p>
      <a href="https://nextjs.org" style={{ marginTop: '20px', color: 'gray' }}>
        Next.js Dokümantasyonu →
      </a>
    </div>
  )
}
