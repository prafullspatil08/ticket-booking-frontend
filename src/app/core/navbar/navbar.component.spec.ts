import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppModule } from 'src/app/app.module';
import { ApiService } from 'src/app/shared/service/api.service';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let injector: TestBed;
  let service: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [AppModule],
      providers: [ApiService],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    injector = getTestBed();
    service = injector.get(ApiService);
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should img source contain url', () => {
    let element = fixture.debugElement.query(By.css('img'));
    expect(element.nativeElement.getAttribute('src')).toBe(
      'https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg'
    );
  });

  it('should navbar heading "Phoenix"', () => {
    let element =
      fixture.debugElement.nativeElement.querySelector('.navbar-brand');
    expect(element.innerHTML).toEqual('Phoenix');
  });

  it('should display login button', () => {
    let element = fixture.debugElement.query(By.css('.btn-outline-primary'));
    expect(element.nativeElement.innerHTML).toBe('Login');
  });

  it('should display History button', () => {
    component.isloggedIn = true;
    fixture.detectChanges();
    let element = fixture.debugElement.query(By.css('.btn-primary'));
    expect(element.nativeElement.innerHTML).toBe('History');
  });

  it('should loggedIn is false', () => {
    expect(component.isloggedIn).toBeFalse();
  });
});
