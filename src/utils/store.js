import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice"
import cacheReducer from "./searchCache";
import chatReducer from "./chatSlice";
import searchReducer from "./searchCache";
const store=configureStore({
    reducer: {
        app:appReducer,
        cacheItems: cacheReducer,
        search: searchReducer,
        chat:chatReducer
    }
});
export default store;



