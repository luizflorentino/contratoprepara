import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Modulo } from './modulo-model';

@Injectable({
  providedIn: 'root'
})
export class ModuloService {

  baseUrl = environment.apiUrl + '/modulos';

  constructor(private http: HttpClient) { }

  listAll() : Observable<Modulo[]> {
    return this.http.get<Modulo[]>(this.baseUrl);
  }

}
