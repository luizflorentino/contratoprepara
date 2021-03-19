import { Component, Input, OnInit } from '@angular/core';
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

}
