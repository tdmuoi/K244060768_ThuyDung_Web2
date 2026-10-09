import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog-service';

@Component({
  selector: 'app-product-catalog',
  standalone: false,
  templateUrl: './product-catalog.html',
  styleUrls: ['./product-catalog.css']
})
export class ProductCatalogComponent implements OnInit {
  categories: any[] = [];

  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    this.categories = this.catalogService.getCategories();
  }
}
