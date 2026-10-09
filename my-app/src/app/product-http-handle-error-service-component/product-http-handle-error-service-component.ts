import { Component, signal } from '@angular/core';
import { Product } from '../classes/iProduct';
import { ProductHttpHandleErrorService } from '../services/product-http-handle-error-service';

@Component({
  selector: 'app-product-http-handle-error-service-component',
  standalone: false,
  styleUrl: './product-http-handle-error-service-component.css',
  templateUrl: './product-http-handle-error-service-component.html',
})
export class ProductHttpHandleErrorServiceComponent {
  products = signal<Product[]>([]);
  errMessage = signal<string>('');

  constructor(private _service: ProductHttpHandleErrorService) { }

  ngOnInit(): void {
    this._service.getProductList().subscribe({
      next: (data: Product[]) => {
        this.errMessage.set('');
        this.products.set(data);
      },
      error: (err: any) => {
        this.products.set([]);
        this.errMessage.set(err?.message || JSON.stringify(err));
      }
    });
  }
}
