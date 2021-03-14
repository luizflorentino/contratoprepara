import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Endereco } from './endereco.model';
import { EnderecoService } from './endereco.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  endereco: Endereco = new Endereco();
  isLoading: boolean = false;

  @Output() enderecoResult: EventEmitter<Endereco> = new EventEmitter();

  constructor(private enderecoService: EnderecoService) { }

  ngOnInit(): void {
  }

  consultaCep() {
    this.endereco.cep = this.converteToValidCep(this.endereco.cep);

    if (this.endereco.cep) {
      this.isLoading = true;
      this.enderecoService.consultaCep(this.endereco.cep)
        .then((endereco) => {
          this.isLoading = false;
          this.endereco = endereco;
          this.enderecoResult.next(this.endereco);
        })
        .catch(() => {
          this.isLoading = false;
          this.cepErrado();
        });
    }
  }

  private cepErrado() {
    let cep = this.endereco.cep;
    this.endereco = new Endereco();
    this.endereco.cep = cep;
    alert("Não foi possível encontrar o CEP digitado.");
  }

  private converteToValidCep(cep: string): string {
    let novoCep = this.endereco.cep;

    if (novoCep) {
      if (novoCep.trim()) {
        novoCep = novoCep.trim().replace('-', '');
        if (novoCep.length == 8) {
          return novoCep;
        }
      }
    }

    return null;
  }
}
