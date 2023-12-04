import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {faArrowUpRightFromSquare}from '@fortawesome/free-solid-svg-icons';
import{faCircleUser}from'@fortawesome/free-solid-svg-icons';
import{faArrowRightFromBracket}from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
role:string|any
profile:string|any;
userid:string|any=localStorage.getItem('userid');
cap:boolean =false;

constructor(public router:Router,private http:HttpClient){

this.profile = localStorage.getItem('profile');

    this.role = localStorage.getItem('role');
this.role=localStorage.getItem('role')
}

ngOnInit():void{
this.http.get(`http://localhost:8080/displayProfilePicture/${this.userid}`,{responseType:'text'}).subscribe((data)=>{if(data ==null){
this.cap=false;
this.profile=localStorage.getItem('profile');
}
else {
this.cap=true;
this.profile=data;
}
})
}

dashboard(){
this.router.navigate(['dashboard'])
}
adminPortal(){
this.router.navigate(['admin-portal'])
}
myProfile(){
this.router.navigate(['my-profile'])
}
signout(){
this.router.navigate(['login'])
localStorage.clear()
}

icon=faArrowUpRightFromSquare
profile1=faCircleUser
arrow2=faArrowRightFromBracket
}