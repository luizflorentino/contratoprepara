import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from '../aluno.model';
import { Escolaridade } from '../../escolaridade/escolaridade.model';
import { Profissao } from '../../profissao/profissao.model';
import { AlunoService } from '../aluno.service';
import { AuxiliaFormsService } from '../../auxilia-forms/auxilia-forms.service';
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

  constructor(
    private alunoService: AlunoService,
    private auxiliaFormsService: AuxiliaFormsService,
    private router: Router) { }

  ngOnInit(): void {
    this.auxiliaFormsService.estadosCivis().subscribe(estadosCivis => {
      this.estadosCivis = estadosCivis;
    });
    this.auxiliaFormsService.sexos().subscribe(sexos => {
      this.sexos = sexos;
    });
  }

  getEndereco(endereco: Endereco): void {
    this.aluno.endereco = endereco;
    console.log(this.aluno);
  }

  getEscolaridade(escolaridade: Escolaridade): void {
    this.aluno.escolaridade = escolaridade;
    console.log(this.aluno);
  }

  getProfissao(profissao: Profissao): void {
    this.aluno.profissao = profissao;
    console.log(this.aluno);
  }

  getSexo(sexo: string): void {
    this.aluno.sexo = sexo;
    console.log(this.aluno);
  }

  getEstadoCivil(estadoCivil: string): void {
    this.aluno.estadoCivil = estadoCivil;
    console.log(this.aluno);
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
