class Veiculo{
constructor(marca,modelo,ano){
    this.marca=marca;
    this.modelo=modelo;
    this.ano=ano;
}
dadosVeiculo() {
    alert(`${this.marca} (${this.modelo}(${this.ano})`);
  }
}
class Carro extends Veiculo{
    constructor(marca,modelo,ano,hp){
        super(marca,ano,modelo);
        this.hp=hp;
    }
    dadosCarro() {
        alert(`${this.marca} (${this.modelo}(${this.ano}) (${this.hp})`);
      }
}

class Moto extends Veiculo{
    constructor(marca,modelo,ano,cilindradas){
        super(marca,ano,modelo);
        this.cilindradas=cilindradas;
    }
    dadosMoto() {
        alert(`${this.marca} (${this.modelo}(${this.ano}) (${this.hp}) (${this.cilindradas})`);
      }
     }  
    var marca=prompt("Marca");
    var modelo=prompt("Modelo");
    var ano=prompt("Ano");
    
    meuVeiculo.dadosCarro();
    meuVeiculo.dadosMoto();