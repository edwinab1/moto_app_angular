import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/moduloprincipal/interfaces/product.interface';
import { ProductsService } from 'src/app/moduloprincipal/services/products.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }

  crearProducto() {
    let nuevo: product = ({
      //categoria: '608b53aecc7a024abc211c7f',
      nombre: 'Paceña',
      descripcion: 'Paceña de 1 LT',
      precio_unitario: 18,
      stock_minimo: 5,
      imagen: 'http://google.com/paceña.png'
    })
    this.productService.crear(nuevo)
      .subscribe(data => {
        console.log(data)
      })
  }

}
