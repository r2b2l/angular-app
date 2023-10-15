import { Country } from "./country";
import { Player } from "./player";

export class Club {
    slug: string;
    name: string;
    shortName: string;
    pictureUrl: string;
    pictureSecondaryUrl: string;
    country: Country;
    activePlayers: {nodes: Array<Player>};

    constructor(slug: string, name: string, shortName: string, pictureUrl: string,
        pictureSecondaryUrl: string, country: Country, activePlayers: any) {
        this.slug = slug;
        this.name = name;
        this.shortName = shortName;
        this.pictureUrl = pictureUrl;
        this.pictureSecondaryUrl = pictureSecondaryUrl;
        this.country = country;
        this.activePlayers = activePlayers;
    }
}
