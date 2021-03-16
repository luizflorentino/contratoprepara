import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curso } from './curso-model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  baseUrl = environment.apiUrl + "/cursos";

  constructor(private http: HttpClient) { }

  listAll(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.baseUrl);
  }
}
