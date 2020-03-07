import { Component } from '@angular/core';
import { DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name:string="Adrian";
  age:number=32 ;

   users: string[]=['adrian', 'pedro','max', 'jose','rudy','francis'];
   posts = [];

   /*Servicios*/ 
  constructor(private dataService:DataService){
      this.dataService.getData().subscribe(data=>{
        this.posts=data;
      });
  }

   sayHello(){
     alert("Hello");
   };

   addUser(newUser){
    this.users.push(newUser.value);
    console.log(newUser.value);
    newUser.value='';
    newUser.focus();
     return false;
   };

   deleteUser(user){
      for (let index = 0; index < this.users.length; index++) 
        {
           if (this.users[index]==user)
           {
             this.users.splice(index,1)
           }
        }
  };

  


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
