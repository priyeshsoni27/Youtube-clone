import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice"
import cacheReducer from "./searchCache";

const store=configureStore({
    reducer: {
        app:appReducer,
        cacheItems: cacheReducer,
    }
});
export default store;



