function SeuNome({ setNome }) {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Digite seu nome" 
        onChange={(e) => setNome(e.target.value)} 
      />
    </div>
  )
}

export default SeuNome