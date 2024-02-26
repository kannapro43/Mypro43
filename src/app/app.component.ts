import { Component, Input, OnInit, ViewChild} from '@angular/core';
import { CounterComponent } from './Practice/counter/counter.component';
import {UserDataService} from './user-data.service';
interface drpdownOptions {
  name: string;
  code: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  
  title = 'demoProject';
  users: any;
  userId=1;
  Id=2;
usersForm: any;
  constructor(private userData: UserDataService)
  {
    this.userData.users(this.userId).subscribe((data)=>{
      this.users=data;
    })
  }
  
  getUserFormData(data:any) {
    console.warn(data)
    this.userData.saveUser(data).subscribe((result)=>{
      console.warn(result)
    })
    
    }



  @ViewChild('childView') child!: CounterComponent;
  
  // states: drpdownOptions[] =[];
  // selectedState: drpdownOptions = { name: '', code: '' };

  // cities: drpdownOptions[] = [];
  // showCities: drpdownOptions[] = [];
  // selectedCity:drpdownOptions={name:'',code:''}
  ngOnInit() {
      // this.states = [
      //     { name: 'Andhra Pradesh', code: 'AP' },
      //     { name: 'Telangana', code: 'TS' },
      //     { name: 'Karnataka', code: 'KA' }
          
      // ];

      // this.cities = [
      //   {name:'Proddatur', code:'AP'},
      //   {name:'Guntur', code:'AP'},
      //   {name:'Vijayawada', code:'AP'},
      //   {name:'Hyderabad', code:'TS'},
      //   {name:'Warangal', code:'TS'},
      //   {name:'Mehadipatnam', code:'TS'},
      //   {name:'Bangalore', code:'KA'},
      //   {name:'Mysore', code:'KA'},
      //   {name:'Coorg', code:'KA'},

      // ];
  }
 
  // showAlert() {
  //   alert(this.selectedCity.code);

  // }

  
  // showStates() {
  //   this.showCities = this.cities.filter(city => city.code === this.selectedState.code);
  // }

  inc(){
    this.child.increment();
  }

  dec(){
    this.child.decrement();
  }

}
