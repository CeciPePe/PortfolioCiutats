import { Component, OnInit } from '@angular/core';

import {ProductsService} from '../../../services/products.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  productos_idx: any = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {

    this.productsService.getProductsIdx()
      .subscribe((resp:any) =>{
        this.productos_idx = resp;
      });


  }


}
