import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

import { MustMatch } from "../must-match.directive";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registerForm;
  userName;

  constructor(private http:HttpClient) { 
    this.registerForm = new FormGroup({
      'username': new FormControl("",Validators.required),
      'email': new FormControl("",[Validators.required,Validators.email]),
      'password': new FormControl("",[Validators.required, Validators.minLength(6)]),
      'confirmPassword': new FormControl("",[Validators.required])
    });
  }

  onKey(event:any){
    //this.userName = event.target.value;
  }

  userRegister(){
    
    this.http.post('http://localhost:8000/register',this.registerForm.value).subscribe((res) => {
        console.log(res);
    });

  }

  ngOnInit(): void {
  }

}


