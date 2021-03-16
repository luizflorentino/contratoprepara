import { Component, OnInit, ViewChild } from '@angular/core';
import { CursoService } from '../curso.service';
import { Curso } from '../curso-model';
import { CursoReadDataSource } from './curso-read-datasource';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-cursos-read',
  templateUrl: './cursos-read.component.html',
  styleUrls: ['./cursos-read.component.css']
})
export class CursosReadComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Curso>;
  dataSource: CursoReadDataSource;

  displayedColumns = ['id', 'nome'];

  constructor(private cursoService: CursoService) {
    this.dataSource = new CursoReadDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.cursoService.listAll().subscribe(
      {
        next: (cursos: Curso[]) => {
          this.dataSource.data = cursos;
          this.table.dataSource = this.dataSource;
        },
        error: () => {
          alert('Erro tentando listar os cursos');
        }
      });
  }
}
