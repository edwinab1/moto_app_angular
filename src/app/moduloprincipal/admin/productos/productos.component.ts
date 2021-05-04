import { Component, OnInit } from '@angular/core';
import { product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  productos: product[] = [];

  ngOnInit(): void {
    this.recuperarInformacion();
  }

  recuperarInformacion(): void {

    this.productService.leer()
      .subscribe(data => {

        if (data.ok) {
          this.productos = data.message;

          console.log(this.productos[0])
        }
      })

  }
}
