import { Card,  CardContent, Typography } from "@mui/material";
import "./SearchBar"


export default function Forecast (props) {
    const {SearchBar} = props
// TODO: Get forecast data from API

    return(
        <Card>
            <CardContent>
                <Typography variant="h5">5-Day Forecast</Typography>
                <Typography variant="subtitle1">Day 1: Temperature High/Low, Conditions</Typography>
                <Typography variant="subtitle1">Day 2: Temperature High/Low, Conditions</Typography>
                <Typography variant="subtitle1">Day 3: Temperature High/Low, Conditions</Typography>
                <Typography variant="subtitle1">Day 4: Temperature High/Low, Conditions</Typography>
                <Typography variant="subtitle1">Day 5: Temperature High/Low, Conditions</Typography>
            </CardContent>
        </Card>
    )


}