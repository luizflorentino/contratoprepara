import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Modulo } from '../../modulo/modulo-model';
import { Curso } from '../curso-model';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-autocomplete',
  templateUrl: 'curso-autocomplete.component.html',
  styleUrls: ['curso-autocomplete.component.css']
})
export class CursoAutocompleteComponent implements OnInit {
  cursoCtrl = new FormControl();
  cursos: Curso[] = [];
  cursoSelecionado: Curso;

  nomesDosCursosFiltrados: Observable<string[]>;
  nomesDosCursos: string[] = [];

  @ViewChild('cursoInput') cursoInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  @Output() cursoResult = new EventEmitter<Curso>();

  constructor(private cursoService: CursoService) {
    this.nomesDosCursosFiltrados = this.cursoCtrl.valueChanges.pipe(
      startWith(''),
      map((nome: string | null) => nome ? this._filter(nome) : this.nomesDosCursos.slice()));

  }

  ngOnInit() {
    this.cursoService.listAll().subscribe({
      next: (cursos) => {
        this.cursos = cursos;
        this.nomesDosCursos = this.cursos.map((curso) => curso.nome);
      },
      error: () => {
        alert('Erro tentando listar os cursos');
      }
    });

    this.nomesDosCursosFiltrados = this.cursoCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    this.cursoSelecionado = this._getCursoPorNome(value);

    if (this.cursoSelecionado) {
      this.cursoResult.emit(this.cursoSelecionado);
    }

    return this.nomesDosCursos.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  setModulos(modulos: Modulo[]): void {
    this.cursoSelecionado.modulos = modulos;
  }

  private _getCursoPorNome(nome: string): Curso {
    return this.cursos.find((c) => c.nome === nome);
  }
}