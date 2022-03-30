import{ HttpClient }from '@angular/common/http';
import { compileDeclarePipeFromMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProductsIdx(){
    return this.http.get('https://aplicacionsceci-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json');
  }


getProduct(codProd: string){
  return this.http.get(`https://aplicacionsceci-default-rtdb.europe-west1.firebasedatabase.app/productos/${codProd}.json`);
}

}
