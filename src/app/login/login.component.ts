import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = ""
  password: string = ""

 

  constructor( public auth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log("Email:",this.email)
    console.log("Password:",this.password)
    this.auth.signInWithEmailAndPassword(this.email, this.password)
    .catch(error => console.log(error.code)
    )
    .then(user => console.log(user));
    this.router.navigate(['/todo'])

}

createUser(){
 this.auth.createUserWithEmailAndPassword(this.email, this.password)
  .then(user => console.log(user));
  this.router.navigate(['/todo'])


}
}
