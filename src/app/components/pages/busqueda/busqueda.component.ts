import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  productos_idx: any = [];
  productos_encontrados: any = [];

  textoBusq: any = '';

  constructor(private productsService: ProductsService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.textoBusq = this.activeRoute.snapshot.paramMap.get('textoBusq');
    this.textoBusq = this.textoBusq.toLowerCase();

    this.productsService.getProductsIdx()
    .subscribe((resp:any) =>{
      this.productos_idx = resp;
      
      this.productos_idx.forEach((prod: any)=>{
        let categoria = prod.categoria.toLowerCase();
        if (categoria.indexOf(this.textoBusq) >= 0){
          this.productos_encontrados.push(prod);
        }
      });

    });


  }

}
