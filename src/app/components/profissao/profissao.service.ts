import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profissao } from './profissao.model';

@Injectable({
  providedIn: 'root'
})
export class ProfissaoService {

  baseUrl = environment.apiUrl + "/profissoes";

  constructor(
    private http: HttpClient) { }

  list(): Observable<Profissao[]> {
    return this.http.get<Profissao[]>(this.baseUrl);
  }
}
