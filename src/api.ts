import axios from "axios"
import * as Types from "./types"
// import { z } from "zod"

const BASE_URL = "https://superheroapi.com/api";


export async function searchHero(token: string, name: string): Promise<Types.Hero[]> {
    const url = `${BASE_URL}/${token}/search/${name}`;


    const res = await axios.get(url);

    let searchRes: Types.HeroSearchResponse = res.data;

    if (searchRes.response !== "success") {
        throw new Error("Hero not found");
    }
    console.log(`Searching for: ${searchRes["results-for"]}`);
    console.log(`Found ${searchRes.results.length} heroes`);

    return searchRes.results;

}

export async function searchHeroById(token: string, id: number): Promise<Types.HeroId> {
    const url = `${BASE_URL}/${token}/${id}`;


    const res = await axios.get(url);

    if (res.data.response !== "success") {
        throw new Error("Hero not found");
    }


    return res.data as Types.Hero;
}


export async function searchHeroPowerStats(token: string, id: number): Promise<Types.PowerStats> {
    const url = `${BASE_URL}/${token}/${id}/powerstats`;

    const res = await axios.get(url);

    if (res.data.response !== "success") {
        throw new Error("Hero not found");
    }



    return res.data as Types.PowerStats;

}
