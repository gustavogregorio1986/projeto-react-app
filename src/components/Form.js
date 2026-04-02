function Form(){

    function cadastrarUsuario(event){
        console.log("Usuário cadastrado com sucesso!")
    }


    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onAbort={cadastrarUsuario()}>
                <div>
                    <input type="text" placeholder="Digite o seu nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form;