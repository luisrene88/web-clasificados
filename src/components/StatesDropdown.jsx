import {Autocomplete, TextField} from "@mui/material";
import {useEffect, useState} from "react";


const StatesDropdown = ({onChange}) => {

    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState(null);

    useEffect(()=>{
        fetch(`http://localhost:9001/api/posts/states?country_id=${142}`+(search ? `&name=${search}` : "")).then((resp)=>{
            return resp.json();
        }).then((data)=>{
            setOptions(data.results);
        })
    }, [search, setOptions])

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
                         getOptionLabel={(option) => option.name}
                         renderInput={(params) => <TextField {...params} value={search} label="Estado" />}
                         options={options} />
}

export default StatesDropdown;