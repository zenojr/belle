export class Login {
    public idUser: number;
    public user: string;
    public password: string;

    constructor(user: string, password: string) {
        this.user = user;
        this.password = password;
    }
}

