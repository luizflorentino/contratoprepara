import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from './endereco.model';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  cepUrl: string = "https://brasilapi.com.br/api/cep/v1/";

  constructor(private http: HttpClient) { }

  async consultaCep(cep: string): Promise<Endereco> {
    const response = await this.http.get<Endereco>(this.cepUrl + cep)
      .toPromise();
    return this.converte(response);
  }

  private converte(enderecoApi: any): Endereco {
    let endereco = new Endereco();

    endereco.logradouro = enderecoApi.street;
    endereco.bairro = enderecoApi.neighborhood;
    endereco.cep = enderecoApi.cep;
    endereco.cidade = enderecoApi.city;
    endereco.estado = enderecoApi.state;

    return endereco;
  }
}