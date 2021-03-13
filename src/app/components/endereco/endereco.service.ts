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

  consultaCep(cep: string): Observable<Endereco> {
    return this.http.get<Endereco>(this.cepUrl + cep);
  }
}
