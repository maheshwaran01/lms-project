import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
constructor(private http:HttpClient){
this.profile=localStorage.getItem('profile')
}
username: string|any =localStorage.getItem('username');
email:string|any=localStorage.getItem('email');
cap: any|boolean;
profile:any|string;
userid:string|any=localStorage.getItem('userid')



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
}
