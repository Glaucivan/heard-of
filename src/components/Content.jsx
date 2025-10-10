import { useContext } from 'react'
import { ListaContext } from '../contexts/Lista'

function Content(){
    const lista = useContext(ListaContext)
    console.log(lista)
    return (
        <main className='list' id='content'>
            <div>{lista}</div>
            <ul></ul>
        </main>
    )
}

export default Content;