import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  id : any = '';

  producto: any;

  constructor(private activeRoute: ActivatedRoute,
              private productsService:ProductsService) { }

  ngOnInit(): void {

    this.id = this.activeRoute.snapshot.paramMap.get('cod');

    this.productsService.getProduct(this.id)
      .subscribe((resp: any) => {
        console.log(resp);
        this.producto = resp;
      });

  }

}
