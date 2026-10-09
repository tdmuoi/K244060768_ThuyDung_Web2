import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail';

describe('ServiceProductImageEventDetailComponent', () => {
  let component: ServiceProductImageEventDetailComponent;
  let fixture: ComponentFixture<ServiceProductImageEventDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [ServiceProductImageEventDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceProductImageEventDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
