import { Club } from "./club";
import { Country } from "./country";

export class Player {
    slug: string;
    age: string;
    country: Country;
    activeClub: Club;
    displayName: string;
    position: string;
    pictureUrl: string;
    lastFiveSo5Appearances: number;
    lastFifteenSo5Appearances: number;

    constructor(slug: string, age: string, country: Country, activeClub: Club, displayName: string, position: string, 
        pictureUrl: string, lastFiveSo5Appearances: number, lastFifteenSo5Appearances: number) {
        this.slug = slug;
        this.age = age;
        this.country = country;
        this.activeClub = activeClub;
        this.position = position;
        this.displayName = displayName;
        this.pictureUrl = pictureUrl;
        this.lastFiveSo5Appearances = lastFiveSo5Appearances;
        this.lastFifteenSo5Appearances = lastFifteenSo5Appearances;
    }
}
