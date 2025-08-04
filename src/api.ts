import axios from "axios"
import * as Types from "./types"
// import { z } from "zod"



export class SuperheroAPI {
    private readonly BASE_URL: string;
    private token: string | null = null;

    constructor(BASE_URL: string, token?: string) {
        this.BASE_URL = BASE_URL;

        if (token) {
            this.token = token;
        }

    }

    public async searchHero(name: string): Promise<Types.Hero[]> {
        const url = `${this.BASE_URL}/${this.token}/search/${name}`;

        const res = await axios.get(url);

        let searchRes: Types.HeroSearchResponse = res.data;

        if (searchRes.response !== "success") {
            throw new Error("Hero not found");
        }

        return searchRes.results;
    }

    public async searchHeroById(id: number): Promise<Types.HeroId> {
        const url = `${this.BASE_URL}/${this.token}/${id}`;


        const res = await axios.get(url);

        if (res.data.response !== "success") {
            throw new Error("Hero not found");
        }
        return res.data as Types.Hero;
    }


    public async searchHeroPowerStats(id: number): Promise<Types.PowerStats> {
        const url = `${this.BASE_URL}/${this.token}/${id}/powerstats`;

        const res = await axios.get(url);

        if (res.data.response !== "success") {
            throw new Error("Hero not found");
        }
        return res.data as Types.PowerStats;
    }


    public async searchHeroBiography(id: number): Promise<Types.Biography> {
        const url = `${this.BASE_URL}/${this.token}/${id}/biography`;

        const res = await axios.get(url);

        if (res.data.response !== "success") {
            throw new Error("Hero not found");
        }

        return res.data as Types.Biography;
    }


    public async searchHeroAppearance(id: number): Promise<Types.Appearance> {
        const url = `${this.BASE_URL}/${this.token}/${id}/appearance`;

        const res = await axios.get(url);

        if (res.data.response !== "success") {
            throw new Error("Hero not found");
        }

        return res.data as Types.Appearance;
    }


    public async searchHeroWork(id: number): Promise<Types.Work> {
        const url = `${this.BASE_URL}/${this.token}/${id}/work`;

        const res = await axios.get(url);

        if (res.data.response !== "success") {
            throw new Error("Hero not found");
        }

        return res.data as Types.Work;
    }


    public async searchHeroConnections(id: number): Promise<Types.Connections> {
        const url = `${this.BASE_URL}/${this.token}/${id}/connections`;

        const res = await axios.get(url);

        if (res.data.response !== "success") {
            throw new Error("Hero not found");
        }

        return res.data as Types.Connections;
    }



    public async searchHeroImage(id: number): Promise<Types.Image> {
        const url = `${this.BASE_URL}/${this.token}/${id}/image`;

        const res = await axios.get(url);

        if (res.data.response !== "success") {
            throw new Error("Hero not found");
        }

        return res.data as Types.Image;
    }
}




