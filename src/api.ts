import axios from "axios"

const BASE_URL = "https://superheroapi.com/api";


export async function searchHero(token: string, name: string) {
    const url = `${BASE_URL}/${token}/search/${name}`;


    const res = await axios.get(url);

    if (res.data.response !== "success") {
        throw new Error("Hero not found");
    }

    return res.data.results;


}
