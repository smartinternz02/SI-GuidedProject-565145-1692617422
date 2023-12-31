import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selecto-r: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string |any;
  password: string |any;
  usertype:string |any;

  private _isLoggedIn: boolean = false; // private backing field for isLoggedIn


  constructor(private authService: AuthService,private router: Router,private http: HttpClient) { }

  onRegister() {
    const data = { username: this.username, password: this.password, usertype: this.usertype };
    this.http.post('http://localhost:3000/register', data).subscribe(
      (response: any) => {
        console.log(response);
        alert('Registration Successful!');
      },
      (error: any) => {
        console.log(error);
        alert('Registration Failed!');
      }
    );
  }

  get isLoggedIn() {
    return this._isLoggedIn; // return the private backing field
  }
}
