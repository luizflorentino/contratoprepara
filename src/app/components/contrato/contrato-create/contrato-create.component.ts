import { Component, OnInit } from '@angular/core';
import { Curso } from '../../curso/curso-model';
import { Contrato } from '../contrato-model';
import { ContratoService } from '../contrato.service';

@Component({
  selector: 'app-contrato-create',
  templateUrl: './contrato-create.component.html',
  styleUrls: ['./contrato-create.component.css']
})
export class ContratoCreateComponent implements OnInit {

  contrato: Contrato = new Contrato();

  constructor(private contratoService: ContratoService) { }

  ngOnInit(): void {
  }

  log() {
    console.log(this.contrato);
  }
  setCurso(curso: Curso) {
    this.contrato.curso = curso;
  }
}
