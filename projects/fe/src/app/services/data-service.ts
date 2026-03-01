import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) { }

    getData(name: string): Observable<HttpResponse<string>> {
      let httpParams = new HttpParams().set('name', name)
      try {
       return this.http.get<string>('http://localhost:8080/be/data',
        {
          observe: 'response',
          params: httpParams
        }
       );
      } catch (error) {
        console.log(error)
        return new Observable()
      }
    }
}
