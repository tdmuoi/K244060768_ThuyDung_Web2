import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { GroupCustomersComponent } from './group-customers';
import { CustomerService } from '../services/customer-service';

describe('GroupCustomersComponent', () => {
  let component: GroupCustomersComponent;
  let fixture: ComponentFixture<GroupCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupCustomersComponent],
      providers: [
        CustomerService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GroupCustomersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
