import { Injectable, Output, EventEmitter } from '@angular/core';

import{User} from './models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class AuthService {
  
  private listusers:User []= [
    {userid : "abc@media.com", password: "abc123" ,username : "tom" },
    {userid : "def@media.com", password:"def123",username :"dick"}
    ]
  constructor() { }
    isUserLoggedin=false;
    @Output() fireIsLoggedIn: EventEmitter<any> = new EventEmitter<any>();
    // @Output() fireUserName: EventEmitter<any> = new EventEmitter<any>();



    

    isAuthenticated(obj){
      console.log(obj['UserID'])
      console.log(obj['Password']);
      this.listusers.forEach((elem)=>{
        if(elem['userid']==obj['UserID'] && elem['password']==obj['Password'] ){
          this.isUserLoggedin=true;
          localStorage.setItem('isUserLoggedin',JSON.stringify({isUserLoggedin:this.isUserLoggedin}))
          localStorage.setItem('UserName',JSON.stringify({UserName:elem['username']}))
          
          this.fireIsLoggedIn.emit('true');
          // this.fireUserName.emit(elem['username']);

          
        }})
      }

    //   getloginStatus(){
    //     let loc=JSON.parse(localStorage.getItem('isUserLoggedin'));
    //     let status=loc['isUserLoggedin']
    //     return status;



    // }
    getEmitter() {
      return this.fireIsLoggedIn;
    }
    // getUserNameEmitter(){
    //   return this.fireUserName;
    // }
    getUserName(){
      let user=JSON.parse(localStorage.getItem('UserName'));
      let UserName=user['UserName'];
      return UserName;
    }

    logout(){
      this.fireIsLoggedIn.emit('false');
      localStorage.clear();
      

    }
    
    

  }
    
    

