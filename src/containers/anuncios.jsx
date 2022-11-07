import {Box, Container, Grid, Typography} from "@mui/material";
import PageNavbar from "../components/PageNavbar";
import StatesDropdown from "../components/StatesDropdown";
import {useEffect, useState} from "react";
import CitiesDropdown from "../components/CitiesDropdown";
import CategoriesDropdown from "../components/CategoriesDropdown";

const Anuncios = () => {
    const [state, setState] = useState();
    const [city, setCity] = useState();
    const [category, setCategory] = useState();

    const handleChangeState = (event, option) => {
        if(option){
            setState(option);
        }else{
            setCity(null);
            setState(null);
        }
    }

    const handleChangeCity = (event, option) => {
        if(option){
            setCity(option);
        }else{
            setCity(null);
        }
    }

    const handleChangeCategory = (event, option) => {
        if(option){
            setCategory(option);
        }else{
            setCategory(null);
        }
    }

    useEffect(()=>{

    },[])

    return <Box>
        <PageNavbar />
        <Box width={'100%'} pb={2} />
        <Container maxWidth={'lg'}>
            <Grid container spacing={2}>
                <Grid item md={3}>
                    <StatesDropdown onChange={handleChangeState} />
                </Grid>
                <Grid item md={3}>
                    <CitiesDropdown state_id={state?.id || null} onChange={handleChangeCity}/>
                </Grid>
                <Grid item md={3}>
                    <CategoriesDropdown onChange={handleChangeCategory} />
                </Grid>
            </Grid>

        </Container>
    </Box>
}

export default Anuncios;