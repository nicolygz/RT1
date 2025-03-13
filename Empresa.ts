import { Funcionario } from "./Funcionario";
import { Endereco } from "./Endereco";
import { Telefone } from "./Telefone";

export class Empresa {
    constructor(
        private funcionarios: Funcionario[],
        private endereco: Endereco,
        private nome: string,
        private ramo: string,
        private cnpj: string,
        private telefones: Telefone[]
    ) {}

    getDados(): string {
        return `Empresa: ${this.nome}, Ramo: ${this.ramo}, CNPJ: ${this.cnpj}, Endereço: ${this.endereco.getEndereco()}, Telefones: ${this.telefones.map(t => t.getTelefone()).join(", ")}`;
    }
}
