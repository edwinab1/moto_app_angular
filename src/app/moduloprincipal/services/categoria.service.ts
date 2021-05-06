import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiResult } from '../interfaces/api_result.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private apiService: ApiService) { }

  recuperarCategorias(): Observable<apiResult> {

    return this.apiService.get('http://localhost:3000/categorias')
  }
}
