import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuxiliaFormsService {

  baseUrl = "http://localhost:8080/api/v1/auxiliaForms";
  
  constructor(private http: HttpClient) { }

  sexos(): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl + "/sexos");
  }

  estadosCivis(): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl + "/estadosCivis");
  }

  tiposParcelas(): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl + "/tiposParcelas");
  }

  modalidades(): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl + "/modalidades");
  }

  horarios(): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl + "/horarios");
  }

  familias(): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl + "/familias");
  }

  diasDaSemana(): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl + "/diasDaSemana");
  }
}
