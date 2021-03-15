import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Escolaridade } from './escolaridade.model';

@Injectable({
  providedIn: 'root'
})
export class EscolaridadeService {

  baseUrl = environment.apiUrl + "/escolaridades";

  constructor(private http: HttpClient) { }

  list(): Observable<Escolaridade[]> {
    return this.http.get<Escolaridade[]>(this.baseUrl);
  }
}
