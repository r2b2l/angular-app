export class HttpError {
    id: number;
    code: number;
    message: string;

    constructor(code: number, message: string) {
        this.id = Math.floor(Math.random() * 1000000) + 1;
        this.code = code;
        this.message = message;
    }
}
