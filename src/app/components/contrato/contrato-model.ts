import { Aluno } from "../aluno/aluno.model";
import { Curso } from "../curso/curso-model";
import { Responsavel } from "../responsavel/responsavel-model";

export class Contrato {
    id: number;
    aluno: Aluno;
    responsavel: Responsavel;
    curso: Curso;
}