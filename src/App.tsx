import { Box } from "@mui/material";
import Forecast from "./components/Forecast";
import SearchBar from "./components/SearchBar";
import WeatherDataProvider from "./context/WeatherDataContext.tsx"

function App() {
  return (
    <>
      <Box>
        <SearchBar />
        <Forecast />
      </Box>
  );
}

export default App;
