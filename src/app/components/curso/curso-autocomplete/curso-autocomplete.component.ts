import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Curso } from '../curso-model';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-autocomplete',
  templateUrl: './curso-autocomplete.component.html',
  styleUrls: ['./curso-autocomplete.component.css']
})
export class CursoAutocompleteComponent implements OnInit {
  control = new FormControl();
  nomesDosCursos: string[] = [];
  cursos: Curso[] = [];
  curso: Curso;
  cursosFiltrados: Observable<string[]>;

  @Output() cursoResult: EventEmitter<Curso> = new EventEmitter();

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.cursoService.listAll().subscribe({
      next: (cursos: Curso[]) => {
        this.cursos = cursos;
        this.nomesDosCursos = cursos.map(c => c.nome);
      },
      error: () => {
        alert('Erro tentando listar os alunos');
      }
    });
    this.cursosFiltrados = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  onChange(nomeDoCurso: string) {
    this.curso = this.cursos.find(c => c.nome === nomeDoCurso);
    this.cursoResult.next(this.curso);
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.nomesDosCursos.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}