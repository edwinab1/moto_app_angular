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

  leerPorID(id: any): Observable<apiResult> {
    return this.apiService.get('http://localhost:3000/productos/leerPorID/' + id)
  }

  eliminar(id: any): Observable<apiResult> {
    return this.apiService.delete('http://localhost:3000/productos/eliminar', id);
  }

  editar(id: any, producto: product): Observable<apiResult> {
    return this.apiService.put('http://localhost:3000/productos/editar/' + id, producto);
  }
}
