import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from '../aluno.model';
import { Escolaridade } from '../../escolaridade/escolaridade.model';
import { Profissao } from '../../profissao/profissao.model';
import { AlunoService } from '../aluno.service';
import { Endereco } from '../../endereco/endereco.model';

@Component({
  selector: 'app-aluno-create',
  templateUrl: './aluno-create.component.html',
  styleUrls: ['./aluno-create.component.css']
})
export class AlunoCreateComponent implements OnInit {

  aluno: Aluno = new Aluno();
  sexos: string[];
  estadosCivis: string[];
  maxData: Date;

  constructor(
    private alunoService: AlunoService,
    private router: Router) {
    let today = new Date();
    this.maxData = new Date(today.getFullYear() - 5, today.getMonth(), today.getDay());

  }

  ngOnInit(): void { }

  setEndereco(endereco: Endereco): void {
    this.aluno.endereco = endereco;
  }

  setEscolaridade(escolaridade: Escolaridade): void {
    this.aluno.escolaridade = escolaridade;
  }

  setProfissao(profissao: Profissao): void {
    this.aluno.profissao = profissao;
  }

  setSexo(sexo: string): void {
    this.aluno.sexo = sexo;
  }

  setEstadoCivil(estadoCivil: string): void {
    this.aluno.estadoCivil = estadoCivil;
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
