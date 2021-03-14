import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-responsavel-crud',
  templateUrl: './responsavel-crud.component.html',
  styleUrls: ['./responsavel-crud.component.css']
})
export class ResponsavelCrudComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navigateToResponsavelCreate(): void {
    this.route.navigate(['/responsaveis/novo']);
  }
}
