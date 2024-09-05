import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { lang } from '../utils/languageConstant';
import MovieList from "../components/MovieList";
import { API_OPTIONS } from '../utils/constants';


const GptSearchBar = () => {
    const [searchMovie,setSearchMovie] = useState(null);
    const LangKey = useSelector(store=>store.lang.Language);
    const SearchInputText = useRef(null);

    const SearchMovie_Data = async(movie) => {
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=false&language=en-US&page=1",API_OPTIONS);
      const json = await data.json();
      // console.log(json)
      return json.results;
    } 

    const handleSearch = async() => {

      // const getQuery = "Act as Movie Recommendation system and suggest some movies for the query"+SearchInputText.current.value+". only give me names of 5 movies , comma separatd like the example  result given in ahead. Example Result: Gadar,Sholay,Don,Golmaal,koi mil gaya";
      //     // console.log(SearchInputText.current.value);
      //     const GptResults = await openAi.chat.completions.create({
      //       messages: [{ role: 'user', content: getQuery }],
      //       model: 'gpt-3.5-turbo',
      //     });

      //     console.log(GptResults.choices)

      const Search_Results = await SearchMovie_Data(SearchInputText.current.value);
      // console.log(Search_Results)
      setSearchMovie(Search_Results);
      console.log(searchMovie)
    };
  return (
    <div className='mt-10 bg-black bg-opacity-70 md:mt-20 pt-[2%] ' >
            <div className='flex justify-center '>
            <form className=' m-2 bg-black  w-1/2 grid grid-cols-12' onSubmit={(e)=>
              e.preventDefault()
            }>
            <input ref={SearchInputText} className=' m-2 py-1 px-1 text-xs col-span-8 md:px-3 md:text-base md:m-4 md:py-2 rounded-md ' type='text' placeholder={lang[LangKey].gptSearchPlaceholder} ></input>
            <button className=' m-2  text-sm px-1 py-1 col-span-4  md:text-base md:px-3 md:py-2 md:m-4 bg-red-800 md:font-semibold rounded-md text-white' onClick={handleSearch} >{lang[LangKey].Search}</button>

            </form>
            </div>
            <div className=' text-white  w-1/2 mx-auto'>
            {searchMovie && <MovieList title={"Upcoming Movies"} movie={searchMovie} />}
            {searchMovie && <MovieList title={"Upcoming Movies"} movie={searchMovie} />}
            {searchMovie && <MovieList title={"Upcoming Movies"} movie={searchMovie} />}
            </div>
    </div>
  )
}

export default GptSearchBar