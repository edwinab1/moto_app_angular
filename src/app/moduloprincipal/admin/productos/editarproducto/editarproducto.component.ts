import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { categoria } from 'src/app/moduloprincipal/interfaces/categoria.interface';
import { product } from 'src/app/moduloprincipal/interfaces/product.interface';
import { CategoriaService } from 'src/app/moduloprincipal/services/categoria.service';
import { ProductsService } from 'src/app/moduloprincipal/services/products.service';

@Component({
  selector: 'app-editarproducto',
  templateUrl: './editarproducto.component.html',
  styleUrls: ['./editarproducto.component.css']
})
export class EditarproductoComponent implements OnInit {

  categorias: categoria[];
  productoSeleccionado: product;

  formularioProducto: FormGroup;

  idProducto: any;

  regexNumbers = new RegExp('^[0-9]*$')

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private producto: ProductsService,
    private categoriaService: CategoriaService,
  ) { }

  ngOnInit(): void {

    this.crearFormulario();
    this.cargarCategorias();

    this.idProducto = this.activatedRoute.snapshot.params.id;
    this.producto.leerPorID(this.idProducto).subscribe(data => {
      if (data.ok) {

        this.productoSeleccionado = data.message;
        this.crearFormulario()
      }
    })

  }

  get formControls() {
    return this.formularioProducto.controls;
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
        nombre: new FormControl(this.productoSeleccionado ? this.productoSeleccionado.nombre : '', [Validators.required]),
        descripcion: new FormControl(this.productoSeleccionado ? this.productoSeleccionado.descripcion : '', Validators.required),
        stock_minimo: new FormControl(this.productoSeleccionado ? this.productoSeleccionado.stock_minimo : '', [Validators.pattern(this.regexNumbers), Validators.required]),
        precio_unitario: new FormControl(this.productoSeleccionado ? this.productoSeleccionado.precio_unitario : '', [Validators.pattern(this.regexNumbers), Validators.required]),
        imagen: new FormControl(this.productoSeleccionado ? this.productoSeleccionado.imagen : '', Validators.required)
      }
    );
  }


  //actualizar productos
  actualizarProducto() {

    if (this.formularioProducto.valid) {

      let product: product = ({
        categoria: this.formularioProducto.get('categoria')?.value,
        nombre: this.formularioProducto.get('nombre')?.value,
        descripcion: this.formularioProducto.get('descripcion')?.value,
        precio_unitario: this.formularioProducto.get('precio_unitario')?.value,
        stock_minimo: this.formularioProducto.get('stock_minimo')?.value,
        imagen: this.formularioProducto.get('imagen')?.value,

      })


      this.producto.editar(this.idProducto, product)
        .subscribe(data => {

          if (data.ok) {
            console.log('ACTUALIZACION', data)
            this.router.navigateByUrl('/admin/productos')
          }
        })

    }
  }
}
