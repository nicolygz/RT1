export class Telefone {
    constructor(
        private ddd: string,
        private numero: string
    ) {}

    getTelefone(): string {
        return `(${this.ddd}) ${this.numero}`;
    }
}
