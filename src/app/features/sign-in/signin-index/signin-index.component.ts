import { Component } from '@angular/core';
import { SigninService } from '../services/signin.service';

@Component({
  selector: 'app-signin-index',
  templateUrl: './signin-index.component.html',
  styleUrls: ['./signin-index.component.css']
})
export class SigninIndexComponent {
  constructor(
    private readonly _servSignIn: SigninService
  ) {
    
  }
}
