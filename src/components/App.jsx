import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Content from './Content.jsx'
import ListaContext from '../contexts/Lista.jsx'

function App() {
  const [list, setList] = useState([])

  return (
    <>
      <ListaContext.Provider value={list}>
        <Header func={setList} />
        <Content />
      </ListaContext.Provider>
    </>
  )
}

export default App;
