const dataPoints = {
    "output": [
        {
            "Restaurant Name": "FIRE POT BIRIYANI",
            "City": "Chennai",
            "Latitude": 13.123071,
            "Longitude": 80.294346
        },
        {
            "Restaurant Name": "Cream Stone",
            "City": "Chennai",
            "Latitude": 13.025223,
            "Longitude": 80.182558
        },
        {
            "Restaurant Name": "Domino's Pizza",
            "City": "Chennai",
            "Latitude": 12.83818,
            "Longitude": 79.70262
        },
        {
            "Restaurant Name": "McDonald's",
            "City": "Chennai",
            "Latitude": 13.006905,
            "Longitude": 80.254215
        },
        {
            "Restaurant Name": "Little Italy",
            "City": "Chennai",
            "Latitude": 13.060733,
            "Longitude": 80.250507
        },
        {
            "Restaurant Name": "Udupi Hotel",
            "City": "Chennai",
            "Latitude": 13.123071,
            "Longitude": 80.294346
        },
        {
            "Restaurant Name": "LunchBox",
            "City": "Chennai",
            "Latitude": 12.9849642,
            "Longitude": 80.217137
        },
        {
            "Restaurant Name": "Sree Gupta Bhavan",
            "City": "Chennai",
            "Latitude": 12.762155,
            "Longitude": 80.0036
        },
        {
            "Restaurant Name": "A2B Veg",
            "City": "Chennai",
            "Latitude": 12.975557,
            "Longitude": 80.132515
        },
        {
            "Restaurant Name": "Anjappar",
            "City": "Chennai",
            "Latitude": 12.972353,
            "Longitude": 80.139463
        }
    ]
}
const cord = dataPoints.output.map((item) => {
    return {"coordinates": [item.Latitude, item.Longitude]}
})

console.log('cord', cord);