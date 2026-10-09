import { Component, OnInit } from '@angular/core';
import { CustomerGroup, CustomerService } from '../services/customer-service';

@Component({
  selector: 'app-group-customers',
  standalone: false,
  templateUrl: './group-customers.html',
  styleUrls: ['./group-customers.css']
})
export class GroupCustomersComponent implements OnInit {
  customerGroups: CustomerGroup[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomerGroups().subscribe({
      next: (data) => {
        this.customerGroups = data;
      },
      error: (err) => {
        console.error('Error fetching customer groups:', err);
      }
    });
  }
}
