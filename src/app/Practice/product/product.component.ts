import { Component, EventEmitter, Output } from '@angular/core';
import { product } from 'src/app/models';





@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent {
Id:number | any;
Name:string="";
Discription:string ="";
products: product[] =  [];
product: product={ id: 0, name: '', dis: '' };

  @Output() productService = new EventEmitter<(product[])>();

addProducts(){
  debugger;
  this.product={ id: 0, name: '', dis: '' };
  this.product.id=this.Id;
  this.product.name=this.Name;
  this.product.dis=this.Discription;
  this.products.push(this.product)
this.productService.emit(this.products);
this.clearFields();

}
clearFields(){
  this.Id="";
  this.Name="";
  this.Discription="";
}


}
