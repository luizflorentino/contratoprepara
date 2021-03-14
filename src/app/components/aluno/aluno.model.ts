import { Endereco } from "../endereco/endereco.model"
import { Escolaridade } from "../escolaridade/escolaridade.model";

export class Aluno {
    id: number;
    criadoEm: Date;
    atualizadoEm: Date;
    nome: string;
    dataDeNascimento: Date;
    estadoCivil: string;
    sexo: string;
    email: string;
    telefone1: string;
    telefone2: string;
    telefone3: string;
    rg: string;
    orgaoRg: string;
    cpf: string;
    link: string;
    profissaoId: number;
    escolaridade: Escolaridade;
    endereco: Endereco;
}
