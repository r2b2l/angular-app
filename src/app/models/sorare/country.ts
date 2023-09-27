export class Country {
    id: string;
    slug: string;
    flagUrl: string;

    constructor(id: string, slug: string, flagUrl: string) {
        this.id = id;
        this.slug = slug;
        this.flagUrl = flagUrl;
    }
}
