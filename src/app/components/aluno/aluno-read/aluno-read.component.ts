import { Component, AfterViewInit, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
import { Aluno } from '../aluno.model';
import { AlunoService } from '../aluno.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { AlunoReadDataSource } from './aluno-read-datasource';

@Component({
  selector: 'app-aluno-read',
  templateUrl: './aluno-read.component.html',
  styleUrls: ['./aluno-read.component.css']
})
export class AlunoReadComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Aluno>;
  dataSource: AlunoReadDataSource;

  displayedColumns = ['id', 'nome', 'telefone1'];

  constructor(private alunoService: AlunoService) {
    this.dataSource = new AlunoReadDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.alunoService.listAll().subscribe(
      {
        next: (alunos: Aluno[]) => {
          this.dataSource.data = alunos;
          this.table.dataSource = this.dataSource;
        },
        error: () => {
          alert('Erro tentando listar os alunos');
        }
      });
  }
}
