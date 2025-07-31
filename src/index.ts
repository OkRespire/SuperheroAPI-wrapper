import { searchHero, searchHeroById, searchHeroPowerStats } from "./api";



export const SuperHeroAPI = (token: string) => ({
    searchHero: (name: string) => searchHero(token, name),
    searchHeroById: (id: number) => searchHeroById(token, id),
    searchHeroPowerStats: (id: number) => searchHeroPowerStats(token, id),
});
