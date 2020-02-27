import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormArray,Validator, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(private http:HttpClient, private router:Router) {

    this.loginForm = new FormGroup({
      'username': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    });

   }

   login(){
    this.http.post('http://localhost:8000/login',this.loginForm.value).subscribe((res)=>{
      localStorage.setItem('session',res['token']);
      console.log(res);
      this.router.navigateByUrl('/feeds');
    });
   }

  ngOnInit(): void {
  }

}
