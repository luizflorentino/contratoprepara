import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Profissao } from './profissao.model';
import { ProfissaoService } from './profissao.service';

@Component({
  selector: 'app-profissao',
  templateUrl: './profissao.component.html',
  styleUrls: ['./profissao.component.css']
})
export class ProfissaoComponent implements OnInit {

  profissao: Profissao = new Profissao();

  profissoes: Profissao[];
  isLoading: boolean = false;

  @Output() profissaoResult: EventEmitter<Profissao> = new EventEmitter();

  constructor(private profissaoService: ProfissaoService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.profissaoService.list().subscribe(profissoes => {
      this.isLoading = false;
      this.profissoes = profissoes;
    },
      error => {
        alert('Falha ao carregar as profissoes');
      }
    );
  }

  onChange(profissaoId: number) {
    this.profissao = this.profissoes.find(e => e.id === profissaoId);
    this.profissaoResult.next(this.profissao);
  }
}
