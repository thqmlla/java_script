console.log("\t--- Exercício 01 ---")

const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};


for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}
