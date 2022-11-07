import {ThemeProvider} from "@mui/material/styles";
import theme from "./theme/config";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./containers/home";
import Anuncios from "./containers/anuncios";


const App = () =>{
    return <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/anuncios"} element={<Anuncios />} />
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
}

export default App;