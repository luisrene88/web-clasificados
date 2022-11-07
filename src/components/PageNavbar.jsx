import {AppBar, Container, Toolbar, Typography} from "@mui/material";

const PageNavbar = () =>{
    return <AppBar position={'sticky'}>
        <Toolbar>
            <Typography variant={'h5'}>
                Clasificados
            </Typography>
        </Toolbar>
    </AppBar>
}

export default PageNavbar;