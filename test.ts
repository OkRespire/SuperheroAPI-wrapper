import dotenv from "dotenv";
dotenv.config();
import { SuperheroAPI } from "./src";


const api = new SuperheroAPI("https://superheroapi.com/api/", process.env.SUPERHERO_API_TOKEN!);


api.searchHero("Batman").then(hero => console.log(hero)).catch(err => console.log(err));

api.searchHeroById(1).then(hero => console.log(hero)).catch(err => console.log(err));

api.searchHeroPowerStats(69).then(hero => console.log(hero)).catch(err => console.log(err));

api.searchHeroBiography(69).then(hero => console.log(hero)).catch(err => console.log(err));

api.searchHeroAppearance(69).then(hero => console.log(hero)).catch(err => console.log(err));

api.searchHeroWork(69).then(hero => console.log(hero)).catch(err => console.log(err));

api.searchHeroConnections(69).then(hero => console.log(hero)).catch(err => console.log(err));

api.searchHeroImage(69).then(hero => console.log(hero)).catch(err => console.log(err));






