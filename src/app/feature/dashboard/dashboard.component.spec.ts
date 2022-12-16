import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from 'src/app/shared/service/api.service';
import { FeatureModule } from '../feature.module';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let service: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [FeatureModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should call getShow method when page initialize', () => {
    spyOn(component, 'getShow');
    component.ngOnInit();
    expect(component.getShow).toHaveBeenCalledOnceWith();
  });

  it('movie data should be defined', () => {
    expect(component.movieData).toBeDefined();
  });
});
