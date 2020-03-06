import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   name: string='Ryan Ray';
  age:number;
  address:{
    street: string;
    city:string;
  };

  hobbies: string[];
  constructor(){
    
    this.age=28;
    this.address={
      street:'calle 8 miami',
      city:'EEUU'
    };
    this.hobbies=['swimming','read','write'];
  }; 

  

}
