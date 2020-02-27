import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

// send user token with the get request in header.
  headerDictionary = {
    'Authorization':localStorage.getItem('session')
  };

  requestHeader = {
    headers : new HttpHeaders(this.headerDictionary)
  };

// alternate to above code
/*
    const headers = new HttpHeaders();
    headers.set("key","value");
 */

  feeds =[];
  post: FormGroup;

  constructor(private http:HttpClient) {

      this.post = new FormGroup({
        'feed': new FormControl("",Validators.required)
      });
      
   }

   postFeed(){
     console.log(this.post.value);
     this.http.put('http://localhost:8000/post',this.post.value,this.requestHeader).subscribe((res)=>{
        console.log(res);
     });
   }

  ngOnInit(): void {
      this.http.get('http://localhost:8000/feeds',this.requestHeader).subscribe((data)=>{
        this.feeds = data['feeds']['feeds'];
          console.log(data);
      },
        response => {
          console.log(response);
        }
      );
  }

}
