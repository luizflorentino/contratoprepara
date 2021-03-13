import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from '../aluno.model';
import { Escolaridade } from '../../escolaridade/escolaridade.model';
import { Profissao } from '../../profissao/profissao.model';
import { AlunoService } from '../aluno.service';
import { EscolaridadeService } from '../../escolaridade/escolaridade.service';
import { AuxiliaFormsService } from '../../auxilia-forms/auxilia-forms.service';
import { ProfissaoService } from '../../profissao/profissao.service';
import { EnderecoService } from '../../endereco/endereco.service';
import { Endereco } from '../../endereco/endereco.model';

@Component({
  selector: 'app-aluno-create',
  templateUrl: './aluno-create.component.html',
  styleUrls: ['./aluno-create.component.css']
})
export class AlunoCreateComponent implements OnInit {
  aluno: Aluno = new Aluno();

  escolaridades: Escolaridade[] | undefined;
  profissoes: Profissao[] | undefined;
  sexos: string[] | undefined;
  estadosCivis: string[] | undefined;

  constructor(
    private alunoService: AlunoService,
    private auxiliaFormsService: AuxiliaFormsService,
    private profissaoService: ProfissaoService,
    private escolaridadeService: EscolaridadeService,
    private enderecoService: EnderecoService,
    private router: Router) { }

  ngOnInit(): void {
    this.escolaridadeService.list().subscribe(escolaridades => {
      this.escolaridades = escolaridades;
    });
    this.profissaoService.list().subscribe(profissoes => {
      this.profissoes = profissoes;
    });
    this.auxiliaFormsService.estadosCivis().subscribe(estadosCivis => {
      this.estadosCivis = estadosCivis;
    });
    this.auxiliaFormsService.sexos().subscribe(sexos => {
      this.sexos = sexos;
    });
  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  consultaCep() {
    this.enderecoService.consultaCep(this.aluno.endereco.cep).subscribe(endereco => {
      this.aluno.endereco = endereco;
    });
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
