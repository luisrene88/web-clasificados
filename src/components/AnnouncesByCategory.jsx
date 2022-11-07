import {Box, Button, Divider, Grid} from "@mui/material";
import {useEffect, useState} from "react";

const AnnouncesByCategory = ({category}) =>{
    const [data, setData] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    useEffect(()=>{
        fetch(`http://localhost:9001/api/posts/list?category_id=${category.id}`)
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
    },[category])
    return <Grid container spacing={2}>
        <Grid xs={12}>{category.name}</Grid>
        {
            data.map(item=>{
                return <Grid key={item.id} xs={12} sm={3} md={4}>
                    <Box>{item.title}</Box>
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