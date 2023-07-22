import Item from "./Item"


function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="ferrari" ano_lancamento={1985} />
                <Item marca="fiat" ano_lancamento={1956}/>
                <Item marca="renault" ano_lancamento={1954}/>
                <Item/>
            </ul>
        </>
    )

}

export default List 