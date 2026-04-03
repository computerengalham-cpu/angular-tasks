import { Injectable } from '@angular/core';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
products:Product[]=[
  {id:1111,name:'laptop',price:200,used:false},
  {id:2222,name:'phone',price:400,used:true},
  {id:3333,name:'headphone',price:20,used:false},
  {id:4444,name:'keyboard',price:30,used:true}
];
  constructor() { }
}
