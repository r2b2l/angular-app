import { OwnerWithRates } from "./owner-with-rates";

export class Card {
    slug: string;
    pictureUrl: string;
    ownerWithRates: OwnerWithRates;

    constructor(slug: string, pictureUrl: string, ownerWithRates: OwnerWithRates) {
        this.slug = slug;
        this.pictureUrl = pictureUrl;
        this.ownerWithRates = ownerWithRates;
    }
}