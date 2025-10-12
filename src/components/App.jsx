import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'
import ListContext from '../contexts/List.jsx'
import LoadContext from '../contexts/Loading.jsx'
import ErrorContext from '../contexts/Error.jsx'

function App() {
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);
  const [loadState, setLoadState] = useState(false);

  return (
    <>
      <ErrorContext.Provider value={{error, setError}}>
        <LoadContext.Provider value={{loadState, setLoadState}}>
          <ListContext.Provider value={{list, setList}}>
            <Header />
            <Content />
            <Footer />
          </ListContext.Provider>
        </LoadContext.Provider>
      </ErrorContext.Provider>
    </>
  )
}

export default App