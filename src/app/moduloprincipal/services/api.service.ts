import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  get(path: string): Observable<any> {

    return this.httpClient.get(path);
  }

  post(path: string, data: any): Observable<any> {

    return this.httpClient.post(path, data);

  }

  put(path: string, data: any): Observable<any> {

    return this.httpClient.put(path, data)
  }

  delete(path: string, id: string): Observable<any> {
    return this.httpClient.delete(`${path + '/' + id}`)
  }
}
