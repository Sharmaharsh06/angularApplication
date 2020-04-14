import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators ,NgForm} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private fb: FormBuilder, private as:AuthService,private router: Router, private route: ActivatedRoute) { 
    this.createForm();
  }

  ngOnInit() {
  }

  //login form creation
  createForm(){
    this.loginForm=this.fb.group({
      UserID:['',Validators.required],
      Password:['',Validators.required]
    })
  }
  onFormSubmit(form:NgForm){
    this.as.isAuthenticated(form);
    if(this.as.isUserLoggedin){
      this.router.navigate(['home']);

    }
    else{
      this.router.navigate(['login']);
    }
  }

}
