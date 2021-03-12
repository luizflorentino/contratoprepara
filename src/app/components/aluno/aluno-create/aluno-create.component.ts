import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-create',
  templateUrl: './aluno-create.component.html',
  styleUrls: ['./aluno-create.component.css']
})
export class AlunoCreateComponent implements OnInit {

  constructor(
    private alunoService: AlunoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createAluno(): void {
    this.alunoService.exibeMensagem("Aluno salvo com sucesso.");
  }

  cancel(): void {
    this.router.navigate(['/alunos']);
  }

}
