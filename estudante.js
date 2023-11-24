class estudante{
constructor(nome,matricula){
    this.nome=nome
    this.matricula=matricula
    }
}
var nome=prompt("nome")
var matricula=prompt("matricula")
const estudante1=new estudante(nome,matricula);
alert(estudante1.nome+"\n"+estudante1.matricula);