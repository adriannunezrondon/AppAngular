import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

   users: string[]=['adrian', 'pedro','max', 'jose','rudy','francis'];
   sayHello(){
     alert("Hello");
   };

   deleteUser(user){
      for (let index = 0; index < this.users.length; index++) 
        {
           if (this.users[index]==user)
           {
             this.users.splice(index,1)
           }
        }
  } 

    /*name: string='Ryan Ray';
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
  }; */




  

}
