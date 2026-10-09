import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService13 } from '../services/product-service-13';

@Component({
  selector: 'app-service-product-image-event-detail',
  standalone: false,
  templateUrl: './service-product-image-event-detail.html',
  styleUrls: ['./service-product-image-event-detail.css']
})
export class ServiceProductImageEventDetailComponent {
  selectedProduct: any;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private pservice: ProductService13
  ) {
    this.activateRoute.paramMap.subscribe((params) => {
      let id = params.get('id');
      if (id) {
        this.selectedProduct = this.pservice.getProductDetail(id);
      }
    });
  }

  goBack() {
    this.router.navigate(['service-product-image-event']);
  }
}
