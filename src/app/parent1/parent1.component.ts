import { Component } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component {

  parent_x:string="";
  parent_y:string="";
  parentVariable:string="";

  
  parentMethod(v:string){
this.parent_x=v;
  }

  parentOnChange(){
    this.parentVariable=this.parent_y;
  }

}
