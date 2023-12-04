import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{faArrowUpRightFromSquare}from '@fortawesome/free-solid-svg-icons';
import{faArrowRight} from '@fortawesome/free-solid-svg-icons';
import{faVideoCamera} from '@fortawesome/free-solid-svg-icons'
import{faCircleUser}from'@fortawesome/free-solid-svg-icons';
import{faArrowRightFromBracket}from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
constructor(private router:Router){}
dashboard(){
this.router.navigate(['dashboard'])
}
adminPortal(){
this.router.navigate(['admin-portal'])
}
myprofile(){
this.router.navigate(['my-profile'])
}
continue(){
this.router.navigate(['my-courses'])
}

icon=faArrowUpRightFromSquare
arrow=faArrowRight
camera=faVideoCamera
profile=faCircleUser
arrow2=faArrowRightFromBracket
}
