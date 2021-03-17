import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Aluno } from '../aluno.model';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-autocomplete',
  templateUrl: './aluno-autocomplete.component.html',
  styleUrls: ['./aluno-autocomplete.component.css']
})
export class AlunoAutocompleteComponent implements OnInit {
  control = new FormControl();
  nomesDosAlunos: string[] = [];
  alunos: Aluno[] = [];
  aluno: Aluno;
  alunosFiltrados: Observable<string[]>;

  @Output() alunoResult: EventEmitter<Aluno> = new EventEmitter();

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.alunoService.listAll().subscribe({
      next: (alunos: Aluno[]) => {
        this.alunos = alunos;
        this.nomesDosAlunos = alunos.map(c => c.nome);
      },
      error: () => {
        alert('Erro tentando listar os alunos');
      }
    });
    this.alunosFiltrados = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  onChange(nomeDoAluno: string) {
    this.aluno = this.alunos.find(c => c.nome === nomeDoAluno);
    this.alunoResult.next(this.aluno);
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.nomesDosAlunos.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}