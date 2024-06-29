import axios from 'axios';
import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherFailure, fetchWeatherStart, fetchWeatherSuccess } from './ReduxToolkitFiles/WeatherSlice';

function Weather() {

    const { weatherData, loading, error } = useSelector((state) => state.weather);
    const dispatch = useDispatch();

    const [query, setQuery] = useState("");


    // `https://api.openweathermap.org/data/2.5/weather?q=${city != "[object Object]" ? city : query}&units=metric&APPID=2c29cbed41eeaeb03728475d7ff17f16`
    // const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2c29cbed41eeaeb03728475d7ff17f16`)


    const search = async (city) => {
        dispatch(fetchWeatherStart());
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=2c29cbed41eeaeb03728475d7ff17f16`)
            const data = res.data;
            console.log(data, "data")
            dispatch(fetchWeatherSuccess(res.data));
            setQuery("");
        }
        catch (error) {
            setQuery("");
            dispatch(fetchWeatherFailure(error.message));
        }
    };

    useEffect(() => {
        search("London");
    }, []);

    return (
        <div>
            <h1>Weather</h1>
            <input
                type="search"
                className="form-control"
                id="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter city name"
            />
            <button type="submit" className="btn btn-primary" onClick={() => search(query)}>Search</button>

            {loading && <p>Loading...</p>}

            {error && <p className="error">Error: {error}</p>}

            {weatherData && (
                <div className="weather-info">
                    <h2>{weatherData.name}</h2>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Feels like: {weatherData.main.feels_like}°C</p>
                    <p>Weather: {weatherData.weather[0].main}</p>
                    <p>Description: {weatherData.weather[0].description}</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                    <p>Visibility: {weatherData.visibility} meters</p>
                    <p>Coordinates: {weatherData.coord.lat}, {weatherData.coord.lon}</p>
                </div>
            )}
        </div>
    );
}

export default memo(Weather);