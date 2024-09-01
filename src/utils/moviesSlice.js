import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
   name :"movies",
   initialState : {
    nowPlayingMovies:null,
    popularMovies:null,
    upcomingMovies: null,
    movieTrailer:null,
   },
   reducers: {
     addNowPlayingMovies: (state,action)=>{
        state.nowPlayingMovies = action.payload;
     },
     addPopularMovies: (state,action) =>{
       state.popularMovies = action.payload;
     },
     addUpcomingMovies: (state,action) =>{
      state.upcomingMovies = action.payload;
    },
     addMovieTrailer:(state,action)=>{
      state.movieTrailer = action.payload;
     }

   }
})

export const { addNowPlayingMovies,addMovieTrailer,addPopularMovies,addUpcomingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;