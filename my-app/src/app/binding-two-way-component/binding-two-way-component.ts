import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-two-way-component',
  standalone: false,
  styleUrl: './binding-two-way-component.css',
  templateUrl: './binding-two-way-component.html',
})
export class BindingTwoWayComponent {
  public hsa:number=0
  public hsb:number=0
  public hsc:number=0
  public result:string=""
  giaiPtb2(): void {
    if (![this.hsa, this.hsb, this.hsc].every(Number.isFinite)) {
      this.result = 'He so khong hop le';
      return;
    }

    // a = 0: ax^2 + bx + c = 0 tro thanh phuong trinh bac 1.
    if (this.hsa === 0) {
      if (this.hsb === 0 && this.hsc === 0) {
        this.result = 'Vo so nghiem';
      } else if (this.hsb === 0) {
        this.result = 'Vo nghiem';
      } else {
        this.result = `x = ${-this.hsc / this.hsb}`;
      }
      return;
    }

    const delta = this.hsb * this.hsb - 4 * this.hsa * this.hsc;

    if (delta < 0) {
      this.result = 'Vo nghiem thuc';
    } else if (delta === 0) {
      this.result = `x = ${-this.hsb / (2 * this.hsa)}`;
    } else {
      const sqrtDelta = Math.sqrt(delta);
      const x1 = (-this.hsb + sqrtDelta) / (2 * this.hsa);
      const x2 = (-this.hsb - sqrtDelta) / (2 * this.hsa);
      this.result = `x1 = ${x1}; x2 = ${x2}`;
    }
  }
}
