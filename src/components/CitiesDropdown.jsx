import {Autocomplete, TextField} from "@mui/material";
import {useEffect, useState} from "react";


const CitiesDropdown = ({state_id, onChange}) => {

    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState(null);

    useEffect(()=>{
        if(!state_id) return;
        fetch(`http://localhost:9001/api/posts/cities?state_id=${state_id}`+(search ? `&name=${search}` : "")).then((resp)=>{
            return resp.json();
        }).then((data)=>{
            setOptions(data.results);
        })
    }, [search, setOptions, state_id])

    const changeInput = event => {
        const {value} = event.target;
        if(value){
            setSearch(value);
        }else{
            setSearch(null);
        }

    }

    return <Autocomplete onInputChange={changeInput}
                         fullWidth
                         onChange={onChange}
                         size={'small'}
                         disabled={!state_id}
                         getOptionLabel={(option) => option.name}
                         renderInput={(params) => <TextField {...params} value={search} label="Ciudad" />}
                         options={options} />
}

export default CitiesDropdown;