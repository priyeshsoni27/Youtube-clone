import { createSlice } from "@reduxjs/toolkit";

const searchCache=createSlice({
    name: 'search',
    initialState:{},
    reducers:{
        cacheItems:(state,action)=>{
            state=Object.assign(state,action.payload)
        }
    },
})


export const {cacheItems}= searchCache.actions;
export default searchCache.reducer;
