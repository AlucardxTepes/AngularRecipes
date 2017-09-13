import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f') signupForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    console.log(this.signupForm.value);
    this.authService.signupUser(email, password);
  }

}
