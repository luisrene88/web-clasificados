import {AppBar, Toolbar, Typography} from "@mui/material";

const PageNavbar = () =>{
    return <AppBar elevation={1} color={'transparent'} position={'sticky'}>
        <Toolbar>
            <Typography variant={'h5'}>
                Clasificados
            </Typography>
        </Toolbar>
    </AppBar>
}

export default PageNavbar;