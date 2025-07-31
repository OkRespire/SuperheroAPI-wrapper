import dotenv from "dotenv";
dotenv.config();
import { SuperHeroAPI } from "./src";


const api = SuperHeroAPI(process.env.SUPERHERO_API_TOKEN!);


api.searchHero("Batman").then(hero => console.log(hero)).catch(err => console.log(err));





