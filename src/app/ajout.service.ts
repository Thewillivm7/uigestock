import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiURL = 'http://192.168.1.71:3000'; // Remplacez cela par l'URL de votre API

  constructor(private http: HttpClient) { }

  ajouterEntree(data: any) {
    return this.http.post(`${this.apiURL}/newentree`, data);
  }
  ajouterSortie(data: any) {
    return this.http.post(`${this.apiURL}/newsortie`, data);
  }
  ajouternewarticle(data: any){
    return this.http.post(`${this.apiURL}/newarticle`, data);

  }
}
