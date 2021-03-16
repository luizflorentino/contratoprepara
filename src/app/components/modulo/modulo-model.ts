import { Apostila } from "../apostila/apostila-model";

export class Modulo {
    id: number;
    criadoEm: Date;
    atualizadoEm: Date;
    cargaHoraria: number;
    familia: string;
    modalidade: string;
    nome: string;
    apostilas: Apostila[];
}
