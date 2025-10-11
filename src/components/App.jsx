import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Content from './Content.jsx'
import ListContext from '../contexts/List.jsx'

function App() {
  const [list, setList] = useState([])
  console.log("VARIAVEL.... LISTA APP: ", list)

  return (
    <>
      <ListContext.Provider value={{list, setList}}>
        <Header />
        <Content />
      </ListContext.Provider>
    </>
  )
}

export default App;
