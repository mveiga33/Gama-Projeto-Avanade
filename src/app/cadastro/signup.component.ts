import { Router } from '@angular/router/';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { EnderecoService } from '../service/endereco.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../app.component.css', './signup.component.css']
})
export class SignupComponent implements OnInit {

  pattern: string = "[a-z0-9][a-z0-9._%+-]*@[a-z0-9][a-z0-9.-]*\.[a-z]{2,20}";
  patternNumeroELetras: string = '[a-z0-9_-]*';

  form: FormGroup;
  states: Array<string>;
  cities: Array<string> = [];

  disabled: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router, private enderecoService: EnderecoService, private authService: AuthService ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: [null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(16), Validators.pattern(this.patternNumeroELetras)]],
      email: [null, [Validators.required,
        Validators.pattern(this.pattern)]],
      password: [null, Validators.required],
      accepts_newsletters: [false]

    });

    this.getStates();

  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  verificaValidTouched(campo: string) {
    return (
      !this.form.get(campo).valid &&
      (this.form.get(campo).touched)
    );
  }

  getStates(){
    this.enderecoService.getStates()
    .subscribe(states => {
      console.log(states);
    });
  }

  getCities(state) {
    this.enderecoService.getCities(state).subscribe(
      response => {
        if (response.ok) {
        alert(response);
        }
      },
      error => {
        console.log("Error occured");
      });

  }



  onSubmit() :void{

    this.authService.signupUser(this.form.value)
      .subscribe(result => {
        this.form.reset();
        this.disabled = false;
      });

  }
}
