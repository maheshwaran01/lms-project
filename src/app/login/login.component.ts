import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Admins } from '../admins';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
email:string='';
password:string='';
message:string='';
 constructor(private router:Router,private http:HttpClient,private auth:AuthService){}

forgotpass(){
this.router.navigate(['forgot-password'])

}

login(data:Admins){
this.auth.login(data)
this.auth.message.subscribe((result)=>{if(result)
{
this.message="login Failed"
}
else{
this.message=""
}

})


// const data = {email:this.email,password:this};
// this.http.post('http://localhost:8080/login',data,{responseType:'text'}).subscribe((response:string) =>{
// if(response ==='success') {
// console.log("hi");
// this.router.navigate(['dashboard']);
// }
// else{
// this.message='login Failed'
// console.log(response);

// console.log("hello  ");
// }
// })
}
}
