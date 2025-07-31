import { searchHero } from "./api";


export const SuperHeroAPI = (token: string) => ({
    searchHero: (name: string) => searchHero(token, name),
});
