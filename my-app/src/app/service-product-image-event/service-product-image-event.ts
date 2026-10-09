import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService13 } from '../services/product-service-13';
@Component({
  selector: 'app-service-product-image-event',
  standalone: false,
  templateUrl: './service-product-image-event.html',
  styleUrls: ['./service-product-image-event.css']
})
export class ServiceProductImageEventComponent {
  public products:any
  constructor(pservice: ProductService13,private router:Router){
  this.products=pservice.getProductsWithImages()
  }
  viewDetail(f:any)
  {
    this.router.navigate(['service-product-image-event',f.ProductId])
  }
}
export { ServiceProductImageEventComponent as ServiceProductImageEvent };