export class Endereco {
    constructor(
        private numero: number,
        private rua: string,
        private bairro: string,
        private cidade: string
    ) {}

    getEndereco(): string {
        return `${this.numero}, ${this.rua}, ${this.bairro}, ${this.cidade}`;
    }
}
