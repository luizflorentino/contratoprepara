import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Aluno } from './aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  baseUrl = "http://localhost:8080/api/v1/alunos";

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient) { }

  exibeMensagem(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.baseUrl, aluno);
  }

  listAll(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.baseUrl);
  }
}
