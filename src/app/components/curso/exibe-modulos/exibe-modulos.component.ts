import { Component, Input, OnInit } from '@angular/core';
import { Modulo } from '../../modulo/modulo-model';
import { Curso } from '../curso-model';

@Component({
  selector: 'app-exibe-modulos',
  templateUrl: './exibe-modulos.component.html',
  styleUrls: ['./exibe-modulos.component.css']
})
export class ExibeModulosComponent implements OnInit {

  @Input() curso: Curso;

  constructor() { }

  ngOnInit(): void { }

  remover(modulo: Modulo): void {
    const index = this.curso.modulos.indexOf(modulo);
    console.log(modulo +" - " + index);

    if (index >= 0) {
      this.curso.modulos.splice(index, 1);
    }
  }

}
