import axios, { AxiosInstance } from "axios"
import * as Types from "./types"
// import { z } from "zod"



export class SuperheroAPI {
    private api: AxiosInstance;

    constructor(BASE_URL: string, token?: string) {
        if (!token) {
            token = "";
        }



        this.api = axios.create({
            baseURL: `${BASE_URL}/${token}/`
        })

    }

    public async searchHero(name: string): Promise<Types.Hero[]> {
        const res = await this.api.get(`search/${name}`);

        let searchRes: Types.HeroSearchResponse = res.data;

        if (searchRes.response !== "success") {
            throw new Error("Hero not found");
        }

        return searchRes.results;
    }

    public async searchHeroById(id: number): Promise<Types.HeroId> {
        const res = await this.api.get(`${id}`);

        if (res.data.response !== "success") {
            throw new Error("Hero not found");
        }
        return res.data as Types.Hero;
    }


    public async searchHeroPowerStats(id: number): Promise<Types.PowerStats> {
        const res = await this.api.get(`${id}/powerstats`);

        if (res.data.response !== "success") {
            throw new Error("Hero not found");
        }
        return res.data as Types.PowerStats;
    }


    public async searchHeroBiography(id: number): Promise<Types.Biography> {
        const res = await this.api.get(`${id}/biography`);

        if (res.data.response !== "success") {
            throw new Error("Hero not found");
        }

        return res.data as Types.Biography;
    }


    public async searchHeroAppearance(id: number): Promise<Types.Appearance> {
        const res = await this.api.get(`${id}/appearance`);

        if (res.data.response !== "success") {
            throw new Error("Hero not found");
        }

        return res.data as Types.Appearance;
    }


    public async searchHeroWork(id: number): Promise<Types.Work> {
        const res = await this.api.get(`${id}/work`);

        if (res.data.response !== "success") {
            throw new Error("Hero not found");
        }

        return res.data as Types.Work;
    }


    public async searchHeroConnections(id: number): Promise<Types.Connections> {
        const res = await this.api.get(`${id}/connections`);

        if (res.data.response !== "success") {
            throw new Error("Hero not found");
        }

        return res.data as Types.Connections;
    }



    public async searchHeroImage(id: number): Promise<Types.Image> {
        const res = await this.api.get(`${id}/image`);

        if (res.data.response !== "success") {
            throw new Error("Hero not found");
        }

        return res.data as Types.Image;
    }
}




