export class Usuario {
    public login: string;
    public nome: string;
    public email: string;
    public fone: string;
    public permAgendar: string;
    public ativo: string;
    public lbAtivo: string;
    public cor: string;
    public senha: string;

    constructor(
        login: string,
        nome: string,
        email: string,
        fone: string,
        permAgendar: string,
        ativo: string,
        lbAtivo: string,
        cor: string,
        senha: string
    ) {
        this.login = login;
        this.nome = nome;
        this.email = email;
        this.fone = fone;
        this.permAgendar = permAgendar;
        this.ativo = ativo;
        this.lbAtivo = lbAtivo;
        this.cor = cor;
        this.senha = senha;
    }
}

