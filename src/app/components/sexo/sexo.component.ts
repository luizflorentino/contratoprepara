import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { AuxiliaFormsService } from '../auxilia-forms/auxilia-forms.service';

@Component({
  selector: 'app-sexo',
  templateUrl: './sexo.component.html',
  styleUrls: ['./sexo.component.css']
})
export class SexoComponent implements OnInit {

  sexos: string[] = [];
  isLoading = false;

  sexo: string;

  @Output() sexoResult: EventEmitter<string> = new EventEmitter();

  constructor(private auxiliaFormService: AuxiliaFormsService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.auxiliaFormService.sexos().subscribe(sexos => {
      this.isLoading = false;
      this.sexos = sexos;
    },
      error => {
        alert('Falha ao carregar os tipos de sexos.');
      }
    );
  }

  onChange(sexoRecebido: string) {
    this.sexo = this.sexos.find(s => sexoRecebido === s);
    this.sexoResult.next(this.sexo);
  }

}
