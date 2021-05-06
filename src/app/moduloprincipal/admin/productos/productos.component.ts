import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(
    private productService: ProductsService,
    private router: Router
  ) { }

  productos: product[] = [];
  valorBusqueda: string = '';

  ngOnInit(): void {
    this.recuperarInformacion();
  }

  recuperarInformacion(): void {

    this.productService.leer()
      .subscribe(data => {

        if (data.ok) {
          this.productos = data.message;
        }
      })


  }

  editarProducto(id: any) {
    this.router.navigate(['/admin/productos/editar', { id }])
  }

  eliminarProducto(id: any) {

    this.productService.eliminar(id)
      .subscribe(data => {
        if (data.ok) {
          console.log(data.message)
          this.recuperarInformacion();
        }
      });

  }

  nuevoProducto() {
    // this.router.navigate(['/admin/productos/crear', { id: 12 }])
    this.router.navigate(['/admin/productos/crear'])
  }
}
