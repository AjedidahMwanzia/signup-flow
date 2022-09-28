import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:any = FormGroup;


  constructor(private FormBuilder:FormBuilder, private router:Router) { }


  ngOnInit(): void {
    this.login= this.FormBuilder.group({
    email:['',Validators.compose([Validators.required,Validators.email])],
    password:['',Validators.required]

    })
  }


loginSubmit(data:any){
  console.log(data)
}

goSignup(){
  this.router.navigate(['register']);
}

}
