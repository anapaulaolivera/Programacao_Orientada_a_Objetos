class pessoa{
    constructor(nome,cpf){
        this.nome=nome;
        this.cpf=cpf;
    }
}
class discente{
    constructor(nome,matricula,curso){
        super(nome);
        this.matricula=matricula;
        this.curso=curso;
    }
}