import { Component, OnInit, signal } from '@angular/core';
import { Product } from '../classes/iProduct';
import { ProductHttpHandleErrorService } from '../services/product-http-handle-error-service';
import { ActivatedRoute, Router } from '@angular/router';
import { createSlug } from '../classes/slug-helper';

@Component({
  selector: 'app-product-list-advanced-component',
  standalone: false,
  styleUrl: './product-list-advanced-component.css',
  templateUrl: './product-list-advanced-component.html',
})
export class ProductListAdvancedComponent implements OnInit {
  products = signal<Product[]>([]);
  errMessage = signal<string>("");
  public generateSlug = createSlug;


  constructor(
    private _service: ProductHttpHandleErrorService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._service.getProductList().subscribe({
      next: (data) => {
        this.products.set(data);
      },
      error: (error) => {
        console.log(error);
        this.errMessage.set(error.message || JSON.stringify(error));
      }
    });
  }
  viewDetail(id: number): void {
    this.router.navigate(["/products", id])
  }
  viewDetailSlug(p: Product) {
    let slug = this.generateSlug(p.name, p.id)
    this.router.navigate(["/products", slug])
  }


}

