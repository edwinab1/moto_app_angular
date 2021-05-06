import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { categoria } from 'src/app/moduloprincipal/interfaces/categoria.interface';
import { product } from 'src/app/moduloprincipal/interfaces/product.interface';
import { CategoriaService } from 'src/app/moduloprincipal/services/categoria.service';
import { ProductsService } from 'src/app/moduloprincipal/services/products.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  constructor(
    private productService: ProductsService,
    private categoriaService: CategoriaService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  formularioProducto: FormGroup;
  regexNumbers = new RegExp('^[0-9]*$')
  categorias: categoria[];

  ngOnInit(): void {
    this.crearFormulario();
    this.cargarCategorias();


   // let id = this.activateRoute.snapshot.params.id

    //console.log(id)
  }

  cargarCategorias() {

    this.categoriaService.recuperarCategorias()
      .subscribe(data => {
        if (data.ok) {
          this.categorias = data.message;
        }
      })
  }


  crearFormulario() {
    this.formularioProducto = new FormGroup(
      {
        categoria: new FormControl(),
        nombre: new FormControl('', [Validators.required]),
        descripcion: new FormControl('', Validators.required),
        stock_minimo: new FormControl('', [Validators.pattern(this.regexNumbers), Validators.required]),
        precio_unitario: new FormControl('', [Validators.pattern(this.regexNumbers), Validators.required]),
        imagen: new FormControl('', Validators.required)
      }
    );
  }

  get formControls() {
    return this.formularioProducto.controls;
  }

  crearProducto() {

    if (this.formularioProducto.valid) {

      let product: product = ({
        categoria: this.formularioProducto.get('categoria')?.value,
        nombre: this.formularioProducto.get('nombre')?.value,
        descripcion: this.formularioProducto.get('descripcion')?.value,
        precio_unitario: this.formularioProducto.get('precio_unitario')?.value,
        stock_minimo: this.formularioProducto.get('stock_minimo')?.value,
        imagen: this.formularioProducto.get('imagen')?.value,

      })


      this.productService.crear(product)
        .subscribe(data => {
          if (data.ok) {
            console.log(data.message)
            this.router.navigateByUrl('/admin/productos')
          }
        })


    }
    else {
      console.log('No Valido')
    }
  }

}
