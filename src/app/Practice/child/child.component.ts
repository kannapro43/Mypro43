import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  child_text: string="";
  @Output() serviceParent = new EventEmitter<string>();

  @Input() childVar:string="";


  @Output() servicePerson = new EventEmitter<string>();

  stu1:string="";
 
  @Input() names:string="";
 
  addText(){
      this.servicePerson.emit(this.stu1);
  }

  




  showText(){
    this.serviceParent.emit(this.child_text);
  }
}
