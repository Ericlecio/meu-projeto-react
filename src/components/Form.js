function Form() {
    
    function cadastrarUsuario(e) {
        e.preventDefault()
        alert('Cadastrou')
    }

    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome" />
                </div>
                <div>
                    <input type="submit" value='cadastrar' />
                </div>
            </form>
        </div>
    )
}

export default Form