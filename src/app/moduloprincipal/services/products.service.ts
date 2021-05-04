import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiResult } from '../interfaces/api_result.interface';
import { product } from '../interfaces/product.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiService: ApiService) { }

  crear(product: product): Observable<apiResult> {

    return this.apiService.post('http://localhost:3000/productos/crear', product)
  }

  leer(): Observable<apiResult> {
    return this.apiService.get('http://localhost:3000/productos')
  }
}
