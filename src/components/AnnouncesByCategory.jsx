import {Box, Button, Divider, Grid, Paper, Toolbar} from "@mui/material";
import {useEffect, useState} from "react";
import TypographyWhite from "./TypographyWhite";

const AnnouncesByCategory = ({city_id, category}) =>{
    const [data, setData] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    useEffect(()=>{
        if(!city_id) return;
        fetch(`http://localhost:9001/api/posts/list?category_id=${category.id}&city_id=${city_id}`)
            .then((resp)=>{
                return resp.json();
            })
            .then((data)=>{
                setData((prevData=>{
                    return [...prevData, ...data.results];
                }))
                setNextPage(data.next);
                setPrevPage(data.previous);
            })
    },[category, city_id])
    return <Grid container spacing={2}>
        <Grid xs={12} item>
            <Box bgcolor={'primary.main'}>
                <Toolbar variant={'dense'}>
                    <TypographyWhite>{category.name}</TypographyWhite>
                </Toolbar>
            </Box>
        </Grid>
        {
            data.map(item=>{
                return <Grid key={item.id} xs={12} sm={3} md={4} item>
                    <Paper sx={{overflow: 'hidden'}}>
                        <Box bgcolor={'primary.main'} p={1}>
                            <TypographyWhite>{item.title}</TypographyWhite>
                        </Box>
                    </Paper>
                    <Box>{item.description}</Box>
                </Grid>
            })
        }
        <Grid xs={12}>
            <Box display={'flex'} justifyContent={'center'}>
                <Button>
                    Anterior
                </Button>
                <Divider sx={{mx: 1}} />
                <Button>
                    Siguiente
                </Button>
            </Box>
        </Grid>
    </Grid>
}

export default AnnouncesByCategory;