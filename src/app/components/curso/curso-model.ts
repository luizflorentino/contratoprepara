import { Modulo } from "../modulo/modulo-model";

export class Curso {
    id: number;
    criadoEm: Date;
    atualizadoEm: Date;
    nome: string;
    modulos: Modulo[];
}
