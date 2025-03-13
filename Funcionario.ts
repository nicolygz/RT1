import { Endereco } from "./Endereco";
import { Telefone } from "./Telefone";

export class Funcionario {
    constructor(
        private nome: string,
        private cpf: string,
        private rg: string,
        private endereco: Endereco,
        private telefone: Telefone
    ) {}

    getDados(): string {
        return `Nome: ${this.nome}, CPF: ${this.cpf}, RG: ${this.rg}, Endereço: ${this.endereco.getEndereco()}, Telefone: ${this.telefone.getTelefone()}`;
    }
}
