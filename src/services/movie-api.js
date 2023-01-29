import axios from "axios";
const API_KEY = '5c82e6dcc7a436ea41436a3788546e28'
const baseURL = "https://api.themoviedb.org/3";

export const getTrends = async () => {
    try {
        const res = await axios.get(`${baseURL}/movie/popular?api_key=${API_KEY}`)
        return res
    } catch (error) {
        console.log(error)
    }
}

export const getMovie = async (value) => {
    try {
        return await axios.get(`${baseURL}/search/movie?api_key=${API_KEY}&language=en-US&query=${value}&page=1&include_adult=false`)
    } catch (error) {
        console.log(error)
    }
}




