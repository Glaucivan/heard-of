import { useState, useContext } from 'react';
import { TextField, Button } from '@mui/material'
//import 'SearchBar.css';

const bandas = ['foo fightes', 'sex pistols', 'avenged sevenfold', 'american football'];

const httpRequest = async(query) => {
    const URI = "https://tastedive.com/api/similar"
                +`?q=${encodeURI(query)}`
                +"&type=music"
                +"&info=1"
                +"&limit=10"
                +"&slimit=5"
                +"&k=1060212-HeardOf-8673E0A3"

    const res = await fetch(URI),
          data = await res.json()
}

function SearchBar(){
    const [ input, setInput ] = useState('');

    const change = (ev) => { setInput(ev.target.value) }

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
            <TextField variant="outlined" value={input} sx={input_sx} placeholder='search' onChange={change}>
                <Button variant="contained" sx = {button_sx}>Send</Button>
            </TextField>
        </div>
    )
}

export default SearchBar;