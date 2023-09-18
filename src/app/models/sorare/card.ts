import { OwnerWithRates } from "./owner-with-rates";
import { Player } from "./player";

export class Card {
    slug: string;
    pictureUrl: string;
    power: number;
    rarity: string;
    ownerWithRates: OwnerWithRates;
    player: Player;

    constructor(slug: string, pictureUrl: string, power: number, rarity: string, ownerWithRates: OwnerWithRates, player: Player) {
        this.slug = slug;
        this.pictureUrl = pictureUrl;
        this.power = power;
        this.rarity = rarity;
        this.ownerWithRates = ownerWithRates;
        this.player = player;
    }
}