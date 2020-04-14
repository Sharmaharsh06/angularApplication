import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import{AuthService} from '../auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
   
  constructor(private as:AuthService, private router:Router) { }
  isLoggedin=false;
  userName:String;
  ngOnInit() {
  
    this.as.getEmitter().subscribe((
      data
    )=>{
      this.isLoggedin=data;
      console.log( this.isLoggedin)
      this.userName=this.as.getUserName();
    })
    
    
  }

  onLogout(){
    
    this.as.logout()
    this.router.navigate(['/login']);
    
    
                         
  }
 
 
  // stat(){
    
  //   this.loggedin=this.as.getloginStatus();
  //   console.log(this.loggedin);
  // }

 

}
