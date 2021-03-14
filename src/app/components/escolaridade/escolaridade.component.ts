import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Escolaridade } from './escolaridade.model';
import { EscolaridadeService } from './escolaridade.service';

@Component({
  selector: 'app-escolaridade',
  templateUrl: './escolaridade.component.html',
  styleUrls: ['./escolaridade.component.css']
})
export class EscolaridadeComponent implements OnInit {

  escolaridade: Escolaridade = new Escolaridade();

  escolaridades: Escolaridade[];
  isLoading: boolean = false;

  @Output() escolaridadeResult: EventEmitter<Escolaridade> = new EventEmitter();

  constructor(private escolaridadeService: EscolaridadeService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.escolaridadeService.list().subscribe(escolaridades => {
      this.isLoading = false;
      this.escolaridades = escolaridades;
    },
      error => {
        alert('Falha ao carregar as escolaridades');
      }
    );
  }

  onChange(escolaridadeId: number) {
    this.escolaridade = this.escolaridades.find(e => e.id === escolaridadeId);
    this.escolaridadeResult.next(this.escolaridade);
  }
}
