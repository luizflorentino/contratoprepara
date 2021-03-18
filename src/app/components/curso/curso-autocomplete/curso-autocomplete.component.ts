import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Curso } from '../curso-model';
import { CursoService } from '../curso.service';

/** 
 * @title Chips Autocomplete 
 */
@Component({
  selector: 'app-curso-autocomplete',
  templateUrl: 'curso-autocomplete.component.html',
  styleUrls: ['curso-autocomplete.component.css']
})
export class CursoAutocompleteComponent implements OnInit {
  visible = true;
  selectable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  cursoCtrl = new FormControl();
  cursosFiltrados: Observable<Curso[]>;
  cursoSelecionado: Curso;
  cursos: Curso[] = [];

  @ViewChild('cursoInput') cursoInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  @Output() cursoResult = new EventEmitter<Curso>();

  constructor(private cursoService: CursoService) {
    this.cursosFiltrados = this.cursoCtrl.valueChanges.pipe(
      startWith(null),
      map((nome: string | null) => nome ? this._filter(nome) : this.cursos.slice()));

  }

  ngOnInit() {
    this.cursoService.listAll().subscribe({
      next: (cursos) => {
        this.cursos = cursos;
      },
      error: () => {
        alert('Erro tentando listar os cursos');
      }
    });
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.cursoSelecionado = this.getCursoPorNome(value.trim());
      this.cursoResult.emit(this.cursoSelecionado);
    }

    if (input) {
      input.value = '';
    }

    this.cursoCtrl.setValue(null);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.cursoSelecionado = this.getCursoPorNome(event.option.viewValue);
    this.cursoInput.nativeElement.value = this.cursoSelecionado.nome;
    this.cursoCtrl.setValue(null);
    this.cursoResult.emit(this.cursoSelecionado);
  }

  private _filter(value: string): Curso[] {
    let ret = [];

    if (typeof value === "string") {
      const filterValue = value.toLowerCase();
      ret = this.cursos.filter(c => c.nome.toLowerCase().indexOf(filterValue) === 0)
    }

    return ret;
  }

  private getCursoPorNome(nome: string): Curso {
    return this.cursos.find(curso => curso.nome === nome);
  }
}