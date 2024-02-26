import { Component , EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  @Output() sperson = new EventEmitter<string>();
  child_x: string="";

@Input() childVariable:string="";


childOnChange(){
  this.sperson.emit(this.child_x);
}




}
