import { Endereco } from "../endereco/endereco.model"
import { Escolaridade } from "../escolaridade/escolaridade.model";
import { Profissao } from "../profissao/profissao.model";

export interface Aluno {
    id?: number;
    criadoEm?: Date;
    atualizadoEm?: Date;
    nome: string;
    dataDeNascimento: Date;
    estadoCivil: string;
    sexo: string;
    email: string;
    telefone1: string;
    telefone2?: string;
    telefone3?: string;
    rg?: string;
    orgaoRg?: string;
    cpf?: string;
    link?: string;
    profissao: Profissao;
    escolaridade: Escolaridade;
    endereco: Endereco;
}
