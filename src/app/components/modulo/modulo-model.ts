import { Apostila } from "../apostila/apostila-model";

export class Modulo {
    id: number;
    cargaHoraria: number;
    familia: string;
    modalidade: string;
    nome: string;
    apostilas: Apostila[];
}
