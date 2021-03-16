import { Component, OnInit } from '@angular/core';
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
  cursos: string[] = [];
  cursosFiltrados: Observable<string[]>;

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.cursoService.listAll().subscribe({
      next: (cursos: Curso[]) => {
        this.cursos = cursos.map(c => c.nome);
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

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.cursos.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}