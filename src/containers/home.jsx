import {Box, Container, Typography} from "@mui/material";
import PageNavbar from "../components/PageNavbar";
import newspaper from "../static/imgs/newspaper.svg";

const Home = () => {
    return <Box>
        <PageNavbar />
        <Container maxWidth={'lg'}>
            <Box width={'100%'} my={4} display={'flex'} alignItems={'center'}>
                <Box width={'400px'}>
                    <img src={newspaper} />
                </Box>
                <Box>
                    <Typography color={'primary'} variant={'h3'} component={'h1'}>
                        Clasificados
                    </Typography>
                    <Typography variant="overline">
                        Recordando la epoca del periodico y los anuncios clasificados.
                    </Typography>
                </Box>
            </Box>
        </Container>
    </Box>
}

export default Home;