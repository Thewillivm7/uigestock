import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceEntreeService {
  private apiUrl = 'http://192.168.1.71:3000/entree';
  constructor(private http: HttpClient) { }
  getTableEntree(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
