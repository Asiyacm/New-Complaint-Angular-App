import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

    name=""
    aadharno=""
    address=""
    mobile=""
    username=""
    password=""
    cpassword=""
  
    userSignup=()=>
    {
      let signup:any=
      {"name":this.name,"aadharno":this.aadharno,"address":this.address,"mobile":this.mobile,
       "username":this.username,"password":this.password,"cpassword":this.cpassword}
         console.log(signup)
    
  
  }
  
  }
