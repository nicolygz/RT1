import { Empresa } from "./Empresa";

export default class Descritor {
    descrever(empresa: Empresa): void {
        console.log(empresa.getDados());
    }
}
