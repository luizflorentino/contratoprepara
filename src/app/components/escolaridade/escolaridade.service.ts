import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Escolaridade } from './escolaridade.model';

@Injectable({
  providedIn: 'root'
})
export class EscolaridadeService {

  baseUrl = "http://localhost:8080/api/v1/escolaridades";

  constructor( private http: HttpClient) { }

  list(): Observable<Escolaridade[]> {
    return this.http.get<Escolaridade[]>(this.baseUrl);
  }

  async list1(cep: string): Promise<Escolaridade> {
    const response = await this.http.get<Escolaridade>(this.baseUrl)
      .toPromise();

    console.log(response);
    return null;
  }
}
