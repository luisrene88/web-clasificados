import { Box } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";

const Index =()=>{
    return <Box bgcolor={'#1289A7'}>
Hello
    </Box>
}
export default Index;
const app = document.getElementById("app");
const element  = ReactDOM.createRoot(app);
element.render(<Index />);