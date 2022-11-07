import {Box, Container, Grid, Typography} from "@mui/material";
import PageNavbar from "../components/PageNavbar";
import StatesDropdown from "../components/StatesDropdown";
import {useEffect, useState} from "react";
import CitiesDropdown from "../components/CitiesDropdown";
import CategoriesDropdown from "../components/CategoriesDropdown";
import AnnouncesByCategory from "../components/AnnouncesByCategory";

const Anuncios = () => {
    const [state, setState] = useState();
    const [city, setCity] = useState();
    const [category, setCategory] = useState();
    const [categories, setCategories] = useState([]);

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
        if(!city) return;
        fetch(`http://localhost:9001/api/posts/categories`+(category ? `?id=${category.id}` : "")).then((resp)=>{
            return resp.json();
        }).then((data)=>{
            setCategories(data.results);
        })
    }, [category, city])

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
            <Box width={'100%'} pt={4}>
            {
                categories.map( cat => {
                    return <AnnouncesByCategory key={cat.id} category={cat} city_id={city?.id || null}  />
                })
            }
            </Box>
        </Container>
    </Box>
}

export default Anuncios;