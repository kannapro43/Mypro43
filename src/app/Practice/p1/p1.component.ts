import { Component } from '@angular/core';
import { product } from 'src/app/models';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css']
})
export class P1Component {


  Id:number | any;
  Name:string="";
  Discription:string ="";
  products: product[] =  [];
  product: product={ id: 0, name: '', dis: '' };


  addProducts(){
    this.product={ id: 0, name: '', dis: '' };
    this.product.id=this.Id;
    this.product.name=this.Name;
    this.product.dis=this.Discription;
    this.products.push(this.product)
  this.clearFields();
  }
  clearFields(){
    this.Id="";
    this.Name="";
    this.Discription="";
  }
  
}
