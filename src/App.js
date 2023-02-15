import logo from "./logo.svg";
import "./App.css";
import Pricepage from "./Components/Pricepage";
import { Box } from "@mui/system";

function App() {
  return (
    <Box>
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
          rel="stylesheet"
        />
      </header>
      <Pricepage />
    </Box>
  );
}

export default App;
