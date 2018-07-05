
export class Estabelecimento {
    public cod: string;
    public cnpj: string;
    public nome: string;
    public razao: string;
    public lograd: string;
    public num: number;
    public uf: string;
    public cidade: string;
    public cep: string;
    public email: string;
    public tel1: string;
    public tel2: string;
    public fax: number;
    public contato: string;
    public padrao: string;
    public movEstoque: number;
    public relAuto: number;
    public cod_cid: number;
    public ativo: number;


    constructor (
    cod: string,
    cnpj: string,
    nome: string,
    razao: string,
    lograd: string,
    num: number,
    uf: string,
    cidade: string,
    cep: string,
    email: string,
    tel1: string,
    tel2: string,
    fax: number,
    contato: string,
    padrao: string,
    movEstoque: number,
    relAuto: number,
    cod_cid: number,
    ativo: number
) {
    this.cod = cod;
    this.cnpj = cnpj;
    this.nome = nome;
    this.razao = razao;
    this.lograd = lograd;
    this.num = num;
    this.uf = uf;
    this.cidade = cidade;
    this.cep = cep;
    this.email = email;
    this.tel1 = tel1;
    this.tel2 = tel2;
    this.fax = fax;
    this.contato = contato;
    this.padrao = padrao;
    this.movEstoque = movEstoque;
    this.relAuto = relAuto;
    this.cod_cid = cod_cid;
    this.ativo = ativo;
}
}
