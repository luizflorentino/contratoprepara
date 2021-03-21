import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Responsavel } from '../responsavel-model';
import { ResponsavelService } from '../responsavel.service';

@Component({
  selector: 'app-responsavel-autocomplete',
  templateUrl: './responsavel-autocomplete.component.html',
  styleUrls: ['./responsavel-autocomplete.component.css']
})
export class ResponsavelAutocompleteComponent implements OnInit {

  control = new FormControl();
  nomesDosResponsaveis: string[] = [];
  responsaveis: Responsavel[] = [];
  responsavel: Responsavel;
  responsaveisFiltrados: Observable<string[]>;

  @Output() responsavelResult = new EventEmitter();

  constructor(private responsavelService: ResponsavelService) { }

  ngOnInit() {
    this.responsavelService.listAll().subscribe({
      next: (responsaveis: Responsavel[]) => {
        this.responsaveis = responsaveis;
        this.nomesDosResponsaveis = responsaveis.map(c => c.nome);
      },
      error: () => {
        alert('Erro tentando listar os responsáveis');
      }
    });
    this.responsaveisFiltrados = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  onChange(nomeDoResponsavel: string) {
    this.responsavel = this.responsaveis.find(c => c.nome === nomeDoResponsavel);
    this.responsavelResult.next(this.responsavel);
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.nomesDosResponsaveis.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

}
