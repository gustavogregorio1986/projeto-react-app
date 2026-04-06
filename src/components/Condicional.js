import React, { useState } from 'react';



function Condicional(){
    
const [email, setEmail] = useState()
const [userEmail, setUserEmail] = useState()

    function emailEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(){
        setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input type="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" onClick={emailEmail}>
                  Enviar email
                </button>
                {userEmail && (
                  <div>
                    <p>O e-mail do usuário é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar email</button>
                  </div>
                )}
            </form>
        </div>
    )

}

export default Condicional; 