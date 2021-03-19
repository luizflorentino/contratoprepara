import { Component, Input, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Modulo } from '../../../modulo/modulo-model';
import { ModuloService } from '../../../modulo/modulo.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Curso } from '../../curso-model';

@Component({
  selector: 'app-seleciona-modulo',
  templateUrl: './seleciona-modulo.component.html',
  styleUrls: ['./seleciona-modulo.component.css']
})
export class SelecionaModuloComponent implements OnInit {
  moduloCtrl = new FormControl();
  modulos: Modulo[] = [];
  modulosSelecionados: Modulo[] = [];

  nomesDosModulosFiltrados: Observable<string[]>;
  nomesDosModulos: string[] = [];

  readonly idCursoPersonalizado: number = 4;
  @Input() curso: Curso;
  @Output() moduloResult = new EventEmitter<Modulo[]>();

  constructor(private moduloService: ModuloService) {
    this.nomesDosModulosFiltrados = this.moduloCtrl.valueChanges.pipe(
      startWith(''),
      map((nome: string | null) => nome ? this._filter(nome) : this.nomesDosModulos.slice()));

  }

  ngOnDestroy() {
    this.modulosSelecionados = [];
  }

  ngOnInit() {
    this.moduloService.listAll().subscribe({
      next: (modulos) => {
        this.modulos = modulos;
        this.nomesDosModulos = this.modulos.map((modulo) => modulo.nome);
      },
      error: () => {
        alert('Erro tentando listar os modulos');
      }
    });

    this.nomesDosModulosFiltrados = this.moduloCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    let modulo = this._getModuloPorNome(value);

    if (modulo && (this.modulosSelecionados.indexOf(modulo) < 0)) {
      this.modulosSelecionados.push(modulo);
      this.moduloResult.emit(this.modulosSelecionados);
    }

    return this.nomesDosModulos.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  private _getModuloPorNome(nome: string): Modulo {
    return this.modulos.find((c) => c.nome === nome);
  }
}