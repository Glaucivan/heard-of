import { useContext } from 'react'
import Item from './Item'
import { Grid } from '@mui/material'
import ListContext from '../contexts/List'

function Content(){
    const { list } = useContext(ListContext)
    const contentList = list.map((itemObj, idx) => (
        <Item
            name={itemObj.name}
            yID={itemObj.yID}
            key={idx}
        />
    ))
    console.log(contentList)
    return (
        <main className='list' id='content'>
            <Grid><ul>{contentList}</ul></Grid>
        </main>
    )
}

export default Content