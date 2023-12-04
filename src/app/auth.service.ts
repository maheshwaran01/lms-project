import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Admins } from './admins';
import { EmailService } from './email.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  message = new EventEmitter<boolean>(false);
  add = new EventEmitter<boolean>();
  roleName: string = '';
  Profile: string ='';
  email: string='';
  userid:string='';
  username:string='';
  
    constructor(private http:HttpClient,private router:Router,private emailservice:EmailService) {

}
// login(data:Admins){
// this.http.post('http://localhost:8080/login',data,{responseType:'text'}).subscribe((response:string) =>{
// if(response ==='success') {
// this.message.emit(false)
// if(data.email.endsWith('@gmail.com')){
// this.email = data.email;
// localStorage.setItem('email', this.email);
// this.router.navigate(['user-dashboard'])
// this.roleName='user'
// localStorage.setItem('role',this.roleName)
// }
// else if(data.email.endsWith('@digital-edify.com')) {
// this.email = data.email;
// localStorage.setItem('email', this.email);
// this.router.navigate(['dashboard'])
// this.roleName='admin'
// localStorage.setItem('role',this.roleName)
// }
// else{
// this.message.emit(true)
// }
// this.Profile= data.email.slice(0, 2).toUpperCase();
//           localStorage.setItem('profile', this.Profile);
//           this.emailservice.setEmailData(this.Profile);

// }
// else{
// this.message.emit(true)
// console.log(response);

// }
// })
// }

login(data:Admins){
this.http.post('http://localhost:8080/login',data,{responseType:'text'}).subscribe((response:string) =>{
if(response ==='Failed') {
this.message.emit(true)

}
else{

console.log(response);
this.message.emit(false)
if(data.email.endsWith('@gmail.com')){
this.userid=response
localStorage.setItem('userid',this.userid)
this.email = data.email;
localStorage.setItem('email', this.email);
this.router.navigate(['user-dashboard'])
this.roleName='user'
localStorage.setItem('role',this.roleName)

 this.http.get<Admins>(` http://localhost:8080/userInfo/${this.userid}`)
              .subscribe((response) => {
                this.email = response.email;
                localStorage.setItem('email', this.email);
                this.username = response.username;
                localStorage.setItem('username', this.username);
              });
}
else if(data.email.endsWith('@digital-edify.com')) {
this.userid=response
localStorage.setItem('userid',this.userid)
this.email = data.email;
localStorage.setItem('email', this.email);
this.router.navigate(['dashboard'])
this.roleName='admin'
localStorage.setItem('role',this.roleName)
 this.http.get<Admins>(` http://localhost:8080/userInfo/${this.userid}`)
              .subscribe((response) => {
                this.email = response.email;
                localStorage.setItem('email', this.email);
                this.username = response.username;
                localStorage.setItem('username', this.username);
              });
}
else{
this.message.emit(true)
}
this.Profile= data.email.slice(0, 2).toUpperCase();
          localStorage.setItem('profile', this.Profile);
          this.emailservice.setEmailData(this.Profile);


}
})
}
}
