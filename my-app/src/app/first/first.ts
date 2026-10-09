import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: false,
  templateUrl: './first.html',
  styleUrls: ['./first.css']
})
export class FirstComponent implements OnInit {
  @Input('parentData') public data: any; 
  @Output() public childEvent = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void { }

  sendData(): void {
    let beerInfo = {
      name: "Heniken",
      price: 19000
    };
    this.childEvent.emit(beerInfo); 
  }
}
