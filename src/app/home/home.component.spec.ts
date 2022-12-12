import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should display movies poster', () => {
    let element = fixture.debugElement.query(By.css('.carousel-inner'));
    expect(element.nativeElement.children[0].children[0].getAttribute('src')).toEqual('https://img.ticketnew.com/tn/offer_banner/Bhediya_1/1920_400_1.jpg');
    expect(element.nativeElement.children[1].children[0].getAttribute('src')).toEqual('https://img.ticketnew.com/tn/offer_banner/Avatar_way_of_water/1920_400.jpg');
    expect(element.nativeElement.children[2].children[0].getAttribute('src')).toEqual('https://img.ticketnew.com/tn/offer_banner/busticket/1920_400.jpg');
    expect(element.nativeElement.children[3].children[0].getAttribute('src')).toEqual('https://assets-in.bmscdn.com/promotions/cms/creatives/1669813550280_wfqc.jpg');
  });

});
