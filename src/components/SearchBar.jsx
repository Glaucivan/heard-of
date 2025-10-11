import { useState, useContext } from 'react';
import ListContext from '../contexts/List';
import { TextField, Button } from '@mui/material'

const httpRequest = async(query) => {

    const URI = "https://tastedive.com/api/similar"
                +`?q=${encodeURI(query)}`
                +"&type=music"
                +"&info=1"
                +"&limit=10"
                +"&slimit=3"
                +"&k=1060212-HeardOf-8673E0A3"
    const proxyURI = "https://cors-anywhere.com/"
    try{
        // HTTP REQUEST to DIVE API
        const res = await fetch(proxyURI+URI);
        ////*****console.log("REQ. MADE")
        if (res.ok){
            ////******console.log("1-RES. SUCESSFULL")
            ////******console.log("2-RES AFTER FETCH: ", res)
            const data = await res.json()
            ////******console.log("3-DATA: ", data)
            ////******console.log("4-RESULTS ARRAY: ", data.similar.results)
            return data.similar.results;
        }
    }
    catch(err){
        console.log(err.message)
        return null
    }

}

function SearchBar(){
    const [ input, setInput ] = useState(''),
          { list, setList } = useContext(ListContext);
    

    const change = (ev) => { setInput(ev.target.value) }

    const keyDown = async (ev) => {
        if(ev.keyCode == 13){
            let data = await httpRequest(input)
            if (data)
                setList(data)
                console.log("CONTEXT set: ", list)
                console.log("DATA to CONTEXT: ", data)
        }
    }

    const button_sx = {
        backgroundColor:"#f7f7f7ff",
        color: "#2c2736",
        width: "100px"
    },
    input_sx = {
        '& .MuiInputBase-input.MuiOutlinedInput-input': { color: "white" },
        width: "100%",
        marginLeft: "15px"
    }

    return (
        <div id="search_bar">
            <TextField variant="outlined" value={input} sx={input_sx} placeholder='search' onChange={change} onKeyDown={keyDown} />
        </div>
    )
}

export default SearchBar;