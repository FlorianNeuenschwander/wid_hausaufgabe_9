import React from "react";
import { CssBaseline, Container, Typography } from "@mui/material";
import VegaChart from "./VegaChart";

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Vega-Lite Chart App
        </Typography>
        <VegaChart />
      </Container>
    </>
  );
}

export default App;
