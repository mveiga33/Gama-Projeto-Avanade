import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router/';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css','./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  disabled: boolean = false;

  pattern: string = '[a-z0-9_-]*';

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: [null, [Validators, Validators.minLength(3),
        Validators.maxLength(16), Validators.pattern(this.pattern)]],
      password: [null, Validators],

    });
  }

  goToSignup(): void{
    this.router.navigate(['/signup']);
  }

  onSubmit(): void {
    this.disabled = true;
    this.authService.loginUser(this.form).subscribe(
      response => {
        if (response.ok) {
        alert(response);
        }
      },
      error => {
        console.log("Error occured");
      });
  }



}
