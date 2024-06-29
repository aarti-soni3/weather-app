import { configureStore } from "@reduxjs/toolkit";
import { weatherSlice } from "./WeatherSlice";

const Store = configureStore({
    reducer: {
        weather: weatherSlice.reducer,
    }
});

export default Store;