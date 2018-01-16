import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { SignupModule } from './cadastro/signup.module';
import { AuthService } from './service/auth.service';
import { EnderecoService } from '../app/service/endereco.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SignupModule,
    HttpModule
  ],
  providers: [EnderecoService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
