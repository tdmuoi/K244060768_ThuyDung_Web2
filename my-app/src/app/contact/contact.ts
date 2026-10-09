import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class ContactComponent {
  sayHello(){
    alert('Hello from contact component');
  }
}
