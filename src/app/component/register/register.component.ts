import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signup:any=FormControl

  constructor(private FormBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.signup= this.FormBuilder.group({
      name:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.required],
    })
    
    
  }

toRegister(data:any){
  console.log(data)
}
toLogin(){
  this.router.navigate(['login'])
}

}
