import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Responsavel } from '../responsavel-model';
import { ResponsavelService } from '../responsavel.service';
import { ResponsavelReadDataSource } from './responsavel-read-datasource';

@Component({
  selector: 'app-responsavel-read',
  templateUrl: './responsavel-read.component.html',
  styleUrls: ['./responsavel-read.component.css']
})
export class ResponsavelReadComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Responsavel>;
  dataSource: ResponsavelReadDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nome', 'telefone1'];

   constructor(private responsavelService: ResponsavelService) {
    this.dataSource = new ResponsavelReadDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.responsavelService.listAll().subscribe(
      {
        next: (responsaveis: Responsavel[]) => {
          this.dataSource.data = responsaveis;
          this.table.dataSource = this.dataSource;
        },
        error: () => {
          alert('Erro tentando listar os responsaveis');
        }
      });
  }
}
