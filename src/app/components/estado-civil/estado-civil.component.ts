import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { AuxiliaFormsService } from '../auxilia-forms/auxilia-forms.service';

@Component({
  selector: 'app-estado-civil',
  templateUrl: './estado-civil.component.html',
  styleUrls: ['./estado-civil.component.css']
})
export class EstadoCivilComponent implements OnInit {

  estadosCivis: string[] = [];
  isLoading = false;

  estadoCivil: string;

  @Output() estadoCivilResult: EventEmitter<string> = new EventEmitter();

  constructor(private auxiliaFormService: AuxiliaFormsService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.auxiliaFormService.estadosCivis().subscribe(estadosCivis => {
      this.isLoading = false;
      this.estadosCivis = estadosCivis;
    },
      error => {
        alert('Falha ao carregar os tipos dos estados civis.');
      }
    );
  }

  onChange(estadoCivilRecebido: string) {
    this.estadoCivil = this.estadosCivis.find(ec => estadoCivilRecebido === ec);
    this.estadoCivilResult.next(this.estadoCivil);
  }
}
