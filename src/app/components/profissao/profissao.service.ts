import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profissao } from './profissao.model';

@Injectable({
  providedIn: 'root'
})
export class ProfissaoService {

  baseUrl = "http://localhost:8080/api/v1/profissoes";

  constructor(
    private http: HttpClient) { }

  list(): Observable<Profissao[]> {
    return this.http.get<Profissao[]>(this.baseUrl);
  }
}
