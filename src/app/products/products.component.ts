import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Shared Classes and types/ICategory';
import { Iproduct } from 'src/app/Shared Classes and types/Iproduct';
import { DiscountOffers } from 'src/app/Shared Classes and types/DiscountOffers';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  Discount:DiscountOffers;
  Store_Name:string;
  Store_Logo:string;
  public ProductList:Array<Iproduct>;
  CategoryList:ICategory[];
  ClientName:string;
  IsPurshased:boolean;
  discount:number=.45;

  isflag(){
    this.IsPurshased=false;
  }

  constructor(private products:ProductService)
  {



    this.Store_Name='My Store'
    this.Store_Logo='../esy.jpg';
    this.Discount=DiscountOffers.a;

    this.ProductList=[{ID:1,Name:'hussain',Quantity:2,Price:15,Img:'./assets/a.jpg'},{ID:2,Name:'ahmad',Quantity:5,Price:45,Img:'./assets/b.jpg'},{ID:3,Name:'mahmoud',Quantity:21,Price:24,Img:'./assets/c.jpg'},{ID:4,Name:'adel',Quantity:32,Price:41,Img:'./assets/d.jpg'},{ID:5,Name:'momen',Quantity:7,Price:17,Img:'./assets/esy.jpg'}];
    this.CategoryList=[{ID:1,Name:'fady'},{ID:2,Name:'ahmed'},{ID:3,Name:'mahmoud'},{ID:4,Name:'aya'},{ID:5,Name:'adel'}];
    this.ClientName='ali';
    this.IsPurshased=true;
  }
  idfind=2;
  prodlist:any;
  prod:any;
  num:number=5;
  ngOnInit(): void {
    this.products.GetAllProducts().subscribe(
      productdata=>{
        this.prodlist=productdata;
      }
    )
    this.products.GetProductById(this.idfind).subscribe(
      product=>{
        this.prod=product[this.idfind-1]
      }
    )
  }
  // renderValues()
  // {
  //   return this.prodlist;
  // }

}
