import Button from "./button"

function Eventos() {

    function meuEvento(){
        alert("Opa fui ativado")
    }

    return (
        <div>
            <p>Clique para disparar um evento</p>
            <Button text="Primeiro Evento"/>
            <button onClick={meuEvento}>Ativar!</button>
        </div>

    )
}

export default Eventos