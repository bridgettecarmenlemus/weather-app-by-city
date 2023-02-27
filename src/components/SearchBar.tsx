import { TextField } from "@mui/material";
import { useState } from "react";

export default function SearchBar() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Call weather API with location

    const headers = new Headers({
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY || "",
      "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
    });
    const options: RequestInit = {
      method: "GET",
      headers: headers as Headers,
    };

    fetch(
      `https://yahoo-weather5.p.rapidapi.com/weather?location=${location}&format=json&u=f`,
      options
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Search for a city 🏙"
        value={location}
        onChange={handleChange}
      />
      {weatherData && <pre>{JSON.stringify(weatherData, null, 2)}</pre>}
    </form>
  );
}
