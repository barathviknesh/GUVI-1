import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import {HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NodeForm';
  userForm:FormGroup;
  val;

  constructor(private http:HttpClient){
    this.userForm = new FormGroup({
      'fname': new FormControl(),
      'lname': new FormControl(),
      'address': new FormControl()
    });
  }

  sendData(){
    this.val = this.userForm.value;
    this.http.post('http://localhost:8000/user',this.val).subscribe((data)=>{
        console.log(data);
    })
  }

}
