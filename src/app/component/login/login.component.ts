import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:any = FormGroup;
  constructor(private FormBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.login= this.FormBuilder.group({
    email:['',Validators.compose],
    password:['',Validators.required]

    })
  }
loginSubmit(data:any){
  console.log(data)
}
}
