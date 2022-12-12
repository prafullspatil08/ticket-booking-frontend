import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FeatureModule } from '../feature.module';

import { SingleShowComponent } from './single-show.component';

describe('SingleShowComponent', () => {
  let component: SingleShowComponent;
  let fixture: ComponentFixture<SingleShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleShowComponent ],
      imports:[
        FeatureModule,
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
