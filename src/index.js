import { Box } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CssBaseline from '@mui/material/CssBaseline';

const Index =()=>{
    return <Box>
        <CssBaseline />
        <App/>
    </Box>
}
export default Index;
const app = document.getElementById("app");
const element  = ReactDOM.createRoot(app);
element.render(<Index />);