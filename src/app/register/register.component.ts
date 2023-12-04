import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor(private router:Router,private http:HttpClient){

}
username: string = '';
  email: string = '';
  password: string = '';
  add:boolean=false;
  register() {
    // console.warn(data);
    // console.log('Name:', this.username);
    const data = {
      username: this.username,
      email: this.email,
      password: this.password,
    };

    this.http
      .post('http://localhost:8080/addUser', data, {
        responseType: 'text',
      })
      .subscribe((response: string) => {
        if (response === 'Added User') {
          this.add =true;
          
        } else {
          this.add =false;
        }
      });
  }
  login(){
  this.router.navigate(['/login']);
  }
}
