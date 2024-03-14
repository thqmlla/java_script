class Imovel {
    constructor(quartos,tipo,endereco){
        this.quartos= quartos;
        this.tipo= tipo;
        this.endereco= endereco;
    }
    exibirInformacoes(){
        return 'Tipo: ${this.tipo}, Quartos: ${this.quartos}, Endereço: ${this.endereco}'
    }
}
const casa=new Imovel(4,"casa", "Rua da Amizade, 789 - Bairro Alegre")
const apartamento=new(2, "Apartamento", "Avenida da Paz, 123 - Centro")
console.log(casa.exibirInformacoes());
console.log(apartamento.exibirInformacoes());