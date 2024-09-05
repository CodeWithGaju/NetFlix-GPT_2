import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
     name: "lang",
     initialState:{
        Language: "en",
     },
     reducers:{
        setlanguage:(state,action)=>{
            state.Language = action.payload;
        }
     }
});

export const {setlanguage} = languageSlice.actions;
export default languageSlice.reducer;