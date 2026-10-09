import { Injectable } from '@angular/core';
import { Product } from '../classes/iProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    products:Product[]=
      [
        {id: 1, name:'iPhone 18', price: 100, image:'https://minhtuanmobile.com/uploads/products/260910065147-iphone-18-pro-256gb-chinh-hang-vn-2.png'},
        {id: 2, name:'Xiaomi 2', price: -200, image:'https://minhtuanmobile.com/uploads/landingpage/iphone-duo-star-white-pdp-images-vi-vn-260910025452.jpg'}, 
        {id: 3, name:'Samsung 3', price: 300, image:'https://minhtuanmobile.com/uploads/products/260910065147-iphone-18-pro-256gb-chinh-hang-vn-2.png'},
        {id: 4, name:'Macbook 4', price: -400, image:'https://minhtuanmobile.com/uploads/products/260910065147-iphone-18-pro-256gb-chinh-hang-vn-2.png'},
        {id: 5, name:'Tablet 5', price: 500, image:'https://minhtuanmobile.com/uploads/products/260910065147-iphone-18-pro-256gb-chinh-hang-vn-2.png'}
      ]
      constructor() { }
      getProductList()
      {
        return this.products;
      }
      filterProductList(minPrice:number, maxPrice:number)
      {
        return this.products.filter(p=>p.price>=minPrice && 
            p.price<=maxPrice);
      }
}
