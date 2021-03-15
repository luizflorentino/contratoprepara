import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Responsavel } from './responsavel-model';

@Injectable({
  providedIn: 'root'
})
export class ResponsavelService {

  baseUrl = "http://localhost:8080/api/v1/responsaveis";

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

  create(responsavel: Responsavel): Observable<Responsavel> {
    return this.http.post<Responsavel>(this.baseUrl, responsavel);
  }

  listAll(): Observable<Responsavel[]> {
    return this.http.get<Responsavel[]>(this.baseUrl);
  }
}
