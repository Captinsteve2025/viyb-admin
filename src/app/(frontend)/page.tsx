export default function HomePage() {
  return (
    <main style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#000',color:'#fff'}}>
      <div style={{textAlign:'center'}}>
        <h1 style={{fontSize:48,marginBottom:24}}>VIYB Admin Server</h1>
        <p style={{opacity:0.8,marginBottom:24}}>This is the homepage for the admin server. Use the button below to open the Payload Admin panel.</p>
        <a href="/admin" style={{
          display:'inline-block',
          padding:'12px 18px',
          borderRadius:8,
          background:'#fff',
          color:'#000',
          textDecoration:'none',
          fontWeight:600
        }}>Go to Admin</a>
      </div>
    </main>
  )
}
