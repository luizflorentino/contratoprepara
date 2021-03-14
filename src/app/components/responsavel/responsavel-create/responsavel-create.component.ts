import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Endereco } from '../../endereco/endereco.model';
import { Escolaridade } from '../../escolaridade/escolaridade.model';
import { Profissao } from '../../profissao/profissao.model';
import { Responsavel } from '../responsavel-model';
import { ResponsavelService } from '../responsavel.service';

@Component({
  selector: 'app-responsavel-create',
  templateUrl: './responsavel-create.component.html',
  styleUrls: ['./responsavel-create.component.css']
})
export class ResponsavelCreateComponent implements OnInit {

  responsavel: Responsavel = new Responsavel();
  sexos: string[];
  estadosCivis: string[];

  constructor(
    private responsavelService: ResponsavelService,
    private router: Router) { }

  ngOnInit(): void { }

  setEndereco(endereco: Endereco): void {
    this.responsavel.endereco = endereco;
  }

  setEscolaridade(escolaridade: Escolaridade): void {
    this.responsavel.escolaridade = escolaridade;
  }

  setProfissao(profissao: Profissao): void {
    this.responsavel.profissao = profissao;
  }

  setSexo(sexo: string): void {
    this.responsavel.sexo = sexo;
  }

  setEstadoCivil(estadoCivil: string): void {
    this.responsavel.estadoCivil = estadoCivil;
  }

  createResponsavel(): void {
    this.responsavelService.create(this.responsavel).subscribe(() => {
      this.responsavelService.exibeMensagem("Responsável salvo com sucesso.");
      this.router.navigate(['/responsaveis']);
    });
  }

  cancel(): void {
    this.router.navigate(['/responsaveis']);
  }
}
