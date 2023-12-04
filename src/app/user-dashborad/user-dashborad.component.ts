import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight, faArrowRightFromBracket, faArrowUpRightFromSquare, faCircleUser, faVideoCamera } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-dashborad',
  templateUrl: './user-dashborad.component.html',
  styleUrls: ['./user-dashborad.component.css']
})
export class UserDashboradComponent {
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

