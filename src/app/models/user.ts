export class User {
    mail: string;
    password: string;
    role: string;

    constructor(mail: string, password: string, role: string) {
        this.mail = mail;
        this.password = password;
        this.role = role;
    }
}
