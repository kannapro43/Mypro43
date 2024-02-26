import { Component } from '@angular/core';
import { product } from 'src/app/models';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  // parent1:string="";
  // parent2:string="";
  // parentVar:string="";
 
  zz:string="";
  stu2:string="";
  parentName: string="";
  prodata: product[] = [];



  getProduct(pro:product[]){
    debugger;
    this.prodata=pro;


  }

  addMsg(show:string){
    this.zz=show;
  }
  
  addTochild(){
    this.parentName=this.stu2;
  }
  
  
  
  
  
  
  // parentShow(a:string){
  //   this.parent1=a;
  // }

  // parentShow1(){
  //     this.parentVar=this.parent2;

  // }

  

}
