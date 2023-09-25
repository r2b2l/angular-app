import { Country } from "./country";

export class Player {
    slug: string;
    age: string;
    country: Country;
    displayName: string;
    position: string;
    pictureUrl: string;
    lastFiveSo5Appearances: number;
    lastFifteenSo5Appearances: number;

    constructor(slug: string, age: string, country: Country, displayName: string, position: string, 
        pictureUrl: string, lastFiveSo5Appearances: number, lastFifteenSo5Appearances: number) {
        this.slug = slug;
        this.age = age;
        this.country = country;
        this.position = position;
        this.displayName = displayName;
        this.pictureUrl = pictureUrl;
        this.lastFiveSo5Appearances = lastFiveSo5Appearances;
        this.lastFifteenSo5Appearances = lastFifteenSo5Appearances;
    }
}
