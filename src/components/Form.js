import { useState } from "react";

function Form(){

    function cadastrarUsuario(event){
        console.log("Usuário cadastrado com sucesso!")
        console.log(`Usuario ${name} foi cadastrado com a senha ${password}`)
    }

    const [name, setName] = useState("Matheus")
    const [password, setPassword] = useState("")    

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onAbort={cadastrarUsuario()}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input 
                       type="text" id="name" 
                       placeholder="Digite o seu nome"
                       onChange={(e) => setName(e.target.value)} />
                </div>
                 <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                       type="text" 
                       id="password" 
                       placeholder="Digite o seu senha" 
                       onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form;