import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contrato-crud',
  templateUrl: './contrato-crud.component.html',
  styleUrls: ['./contrato-crud.component.css']
})
export class ContratoCrudComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navigateToContratoCreate() {
    this.route.navigate(['contratos/novo']);
  }
}
