import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SortieService {
  private apiUrl = 'http://192.168.1.71:3000/sortie';
  constructor(private http: HttpClient) { }
  getTableSortie(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
