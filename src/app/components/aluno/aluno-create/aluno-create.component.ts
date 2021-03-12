import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from '../aluno.model';
import { Endereco } from '../../endereco/endereco.model';
import { Escolaridade } from '../../escolaridade/escolaridade.model';
import { Profissao } from '../../profissao/profissao.model';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-create',
  templateUrl: './aluno-create.component.html',
  styleUrls: ['./aluno-create.component.css']
})
export class AlunoCreateComponent implements OnInit {

  aluno: Aluno = {
    nome: "Paula Maria",
    dataDeNascimento: new Date(1983, 12, 4),
    email: "paulinhafnunes@gmail.com",
    telefone1: "83999858255",
    estadoCivil: "CASADO",
    sexo: "FEMININO",
    profissao: {
      id: 1,
      descricao: "",
    },
    escolaridade: {
      id: 1,
      descricao: "",
    },
    endereco: {
      bairro: "Manaíra",
      cep: "58038381",
      cidade: "João Pessoa",
      estado: "PB",
      logradouro: "Avenida Sapé",
      numero: "953"
    }
  };

  constructor(
    private alunoService: AlunoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createAluno(): void {
    this.alunoService.create(this.aluno).subscribe(() => {
      this.alunoService.exibeMensagem("Aluno salvo com sucesso.");
      this.router.navigate(['/alunos']);
    });
  }

  cancel(): void {
    this.router.navigate(['/alunos']);
  }

}
