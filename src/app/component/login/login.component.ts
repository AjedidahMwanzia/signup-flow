import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:any = FormGroup;
  users = [];

  constructor(private FormBuilder:FormBuilder, private router:Router, private commonService:CommonService) { }


  ngOnInit(): void {
    this.login= this.FormBuilder.group({
    email:['',Validators.compose([Validators.required,Validators.email])],
    password:['',Validators.required]

    })

    this.commonService.getUser().subscribe((data:any)=>{
      this.users= data;
    })
  }




  loginSubmit(data:any){

    if(data.email){
      this.users.forEach((item:any)=>{
        if (item.email === data.email && item.password === data.password){
          localStorage.setItem("isLoggedIn", 'true');
            this.router.navigate(['home']);
        }
            
        else(
          console.log('invalid user')
        )
      })
    }
  }

goSignup(){
  this.router.navigate(['register']);
}

}
