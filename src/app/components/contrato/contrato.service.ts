import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contrato } from './contrato-model';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  baseUrl = environment.apiUrl + "/contratos";

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

  create(contrato: Contrato): Observable<Contrato> {
    return this.http.post<Contrato>(this.baseUrl, contrato);
  }

  listAll(): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(this.baseUrl);
  }
}
