import { Card, CardContent, Typography } from "@mui/material";



export default function CurrentWeather () {
// TODO it will get the current weather data from API

    return (
        <Card>
            <CardContent>
                <Typography variant="h4">City Name</Typography>
                <Typography variant="h6">Current Weather Conditions</Typography>
                <Typography variant="subtitle1">Temperature: XX% C</Typography>
                <Typography variant="subtitle1">Humidity: XX%</Typography>
            </CardContent>
        </Card>
    )
}