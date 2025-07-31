export interface Hero {
    id: string;
    name: string;
    powerstats: {
        intelligence: string;
        strength: string;
        speed: string;
        durability: string;
        power: string;
        combat: string;
    };
    biography: {
        fullName: string;
        publisher: string;
        alignment: string;
        [key: string]: any;
    };
}
