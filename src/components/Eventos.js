import Button from "./Button"

function Eventos() {

    function meuEvento(){
        alert("Ativando primerio evento")
    }

    function segundoEvento(){
        alert("Ativando segundo evento!")
    }

    return (
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>

    )
}

export default Eventos