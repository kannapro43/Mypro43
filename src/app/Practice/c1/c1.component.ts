import { Component, Input } from '@angular/core';
import { product } from 'src/app/models';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component {
@Input() prodata: product[]=[];
@Input() selectedState: string=""; 
@Input() selectedCity: string="";


}
