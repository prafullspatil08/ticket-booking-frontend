import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AuthModule } from '../auth.module';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [AuthModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('loginForm should be defined', () => {
    expect(component.signupForm).toBeDefined();
  });

  it('should have an input element with class ctrl for the Name field', () => {
    let element = fixture.debugElement
      .query(By.css('form'))
      .nativeElement.querySelectorAll('div')[1].children[1];
    expect(element).toBeTruthy();
    expect(element.getAttribute('type')).toBe('text');
    expect(element.getAttribute('formControlName')).toBe('firstName');
    expect(element.getAttribute('autocomplete')).toBe('off');
  });

  it('should have an input element with class ctrl for the email field', () => {
    let element = fixture.debugElement
      .query(By.css('form'))
      .nativeElement.querySelectorAll('div')[2].children[1];
    expect(element).toBeTruthy();
    expect(element.getAttribute('type')).toBe('email');
    expect(element.getAttribute('formControlName')).toBe('email');
    expect(element.getAttribute('autocomplete')).toBe('off');
  });

  it('should have an input element with class ctrl for the mobile field', () => {
    let element = fixture.debugElement
      .query(By.css('form'))
      .nativeElement.querySelectorAll('div')[3].children[1];
    expect(element).toBeTruthy();
    expect(element.getAttribute('type')).toBe('text');
    expect(element.getAttribute('formControlName')).toBe('mobile');
    expect(element.getAttribute('autocomplete')).toBe('off');
  });

  it('should have an input element with class ctrl for the password field', () => {
    let element = fixture.debugElement
      .query(By.css('form'))
      .nativeElement.querySelectorAll('div')[4].children[1];
    expect(element).toBeTruthy();
    expect(element.getAttribute('type')).toBe('password');
    expect(element.getAttribute('formControlName')).toBe('password');
    expect(element.getAttribute('autocomplete')).toBe('off');
  });

  it('should have an input element button with submit', () => {
    let element = fixture.debugElement
      .query(By.css('form'))
      .nativeElement.querySelectorAll('button')[0];
    expect(element).toBeTruthy();
    expect(element.getAttribute('type')).toBe('submit');
  });

  it('should have an input element button with reset', () => {
    let element = fixture.debugElement
      .query(By.css('form'))
      .nativeElement.querySelectorAll('button')[1];
    expect(element).toBeTruthy();
    expect(element.getAttribute('type')).toBe('reset');
  });

  it('check email value after entering some value and validation', () => {
    let loginFormEmailElement = fixture.debugElement
      .query(By.css('form'))
      .nativeElement.querySelectorAll('div')[2].children[1];
    loginFormEmailElement.value = 'aman@gmail.com';
    loginFormEmailElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let emailValue = component.signupForm.get('email');
      expect(loginFormEmailElement.value).toEqual(emailValue?.value);
      expect(emailValue?.errors).toBeNull();
    });
  });

  it('check password value after entering some value and validation', () => {
    let loginFormMobileElement = fixture.debugElement
      .query(By.css('form'))
      .nativeElement.querySelectorAll('div')[4].children[1];
    loginFormMobileElement.value = 'Prafull@123';
    loginFormMobileElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let emailValue = component.signupForm.get('password');
      expect(loginFormMobileElement.value).toEqual(emailValue?.value);
      expect(emailValue?.errors).toBeNull();
    });
  });

  it('check mobile value after entering some value and validation', () => {
    let loginFormMobileElement = fixture.debugElement
      .query(By.css('form'))
      .nativeElement.querySelectorAll('div')[3].children[1];
    loginFormMobileElement.value = '8482850810';
    loginFormMobileElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let emailValue = component.signupForm.get('mobile');
      expect(loginFormMobileElement.value).toEqual(emailValue?.value);
      expect(emailValue?.errors).toBeNull();
    });
  });
});
