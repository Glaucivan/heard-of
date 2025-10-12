import { useContext } from 'react'
import { Grid } from '@mui/material'
import ListContext from '../contexts/List'
import LoadContext from '../contexts/Loading'
import ErrorContext from '../contexts/Error'
import Item from './Item'
import Loading from './Loading'
import Error from './Error'

function Content(){
    const { list } = useContext(ListContext)
    const contentList = list.map((itemObj, idx) => (
        <Item
            name={itemObj.name}
            yID={itemObj.yID}
            key={idx}
        />
    ))
    
    const { error, setError } = useContext(ErrorContext);
    const { loadState } = useContext(LoadContext);

    const showErrorMsg = (error) => {
        if (error && error.origin === "DiveAPIFetch")
            return error.error.message
        return null
    }
    const isErrorVisible = (error) => {
        return ((error && error.origin === "DiveAPIFetch") ? "visible" : "hidden");
    }

    return (
        <main className='list' id='content'>
            <div id="load" className={loadState ? "visible" : "hidden"}>
                <Loading id="loading">Loading...</Loading>
                <Error className={isErrorVisible(error)} id="error">{showErrorMsg(error)}</Error>
            </div>
            <Grid sx={{
                display: loadState ? "none" : "block"
            }}
        ><ul>{contentList}</ul></Grid>
        </main>
    )
}

export default Content