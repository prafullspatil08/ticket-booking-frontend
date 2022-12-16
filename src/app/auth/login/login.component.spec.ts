import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule } from '../auth.module';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [AuthModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('loginForm should be defined', () => {
    expect(component.loginForm).toBeDefined();
  });

  it('test a form group element length', () => {
    let formElement = fixture.debugElement.nativeElement.querySelector('form');
    let inputElement = formElement.querySelectorAll('input');
    expect(inputElement.length).toBe(2);
  });

  it('check email value after entering some value and validation', () => {
    let loginFormElement = fixture.debugElement.nativeElement
      .querySelector('form')
      .querySelectorAll('input')[0];
    loginFormElement.value = 'aman@gmail.com';
    loginFormElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let emailValue = component.loginForm.get('email');
      expect(loginFormElement.value).toEqual(emailValue?.value);
      expect(emailValue?.errors).toBeNull();
    });
  });

  it('checkl login form is valid when validations are fulfilled', () => {
    let loginFormEmailElement = fixture.debugElement.nativeElement
      .querySelector('form')
      .querySelectorAll('input')[0];
    let loginFormPasswordElement = fixture.debugElement.nativeElement
      .querySelector('form')
      .querySelectorAll('input')[1];
    loginFormEmailElement.value = 'prafull@gmail.com';
    loginFormPasswordElement.value = 'prafull@123';
    loginFormEmailElement.dispatchEvent(new Event('input'));
    loginFormPasswordElement.dispatchEvent(new Event('input'));
    let isLoginFormValid = component.loginForm.valid;
    fixture.whenStable().then(() => {
      expect(isLoginFormValid).toBeTruthy();
    });
  });

  it('should have an input element with class ctrl for the email field', () => {
    let element = fixture.debugElement
      .query(By.css('form'))
      .nativeElement.querySelectorAll('input')[0];
    expect(element).toBeTruthy();
    expect(element.getAttribute('type')).toBe('email');
    expect(element.getAttribute('formControlName')).toBe('email');
    expect(element.getAttribute('autocomplete')).toBe('off');
  });

  it('should have an input element with class ctrl for the password field', () => {
    let element = fixture.debugElement
      .query(By.css('form'))
      .nativeElement.querySelectorAll('input')[1];
    expect(element).toBeTruthy();
    expect(element.getAttribute('type')).toBe('password');
    expect(element.getAttribute('formControlName')).toBe('password');
    expect(element.getAttribute('autocomplete')).toBe('off');
  });

  it('should redirect to signup click on "create new account"', () => {
    let element = fixture.debugElement.query(
      By.css('[routerLink]')
    ).nativeElement;
    expect(element.getAttribute('routerLink')).toEqual('/signup');
  });
});
