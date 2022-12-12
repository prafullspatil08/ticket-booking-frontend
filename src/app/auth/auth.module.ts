import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent, SignupComponent, PageNotFoundComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
})
export class AuthModule { }
