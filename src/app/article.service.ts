import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'http://192.168.1.71:3000/article';
  constructor(private http: HttpClient) { }
  getTableArticle(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
