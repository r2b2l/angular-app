import { Country } from "./country";

export class Club {
    slug: string;
    name: string;
    shortName: string;
    pictureUrl: string;
    pictureSecondaryUrl: string;
    country: Country;

    constructor(slug: string, name: string, shortName: string, pictureUrl: string,
        pictureSecondaryUrl: string, country: Country) {
        this.slug = slug;
        this.name = name;
        this.shortName = shortName;
        this.pictureUrl = pictureUrl;
        this.pictureSecondaryUrl = pictureSecondaryUrl;
        this.country = country;
    }
}
