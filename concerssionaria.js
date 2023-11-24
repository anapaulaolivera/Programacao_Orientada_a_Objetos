class veiculo{
    constructor(marca, modelo, ano){
        this.marca=marca
        this.modelo=modelo;
        this.ano=ano;
    }
}
var marca=prompt("marca")
var modelo=prompt("modelo")
var ano=prompt("ano")
const veiculo1= new veiculo(marca,modelo,ano);
alert(veiculo1.marca+"\n"+veiculo1.modelo+"\n"+veiculo1.ano);