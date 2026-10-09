import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-event-component',
  standalone: false,
  styleUrl: './binding-event-component.css',
  templateUrl: './binding-event-component.html',
})
export class BindingEventComponent {
  public hsa:number=5
  public hsb:number=7
  public result:string="Kết quả ở đây"
  giaiPtb1(a: string, b: string): void {
    this.hsa = Number(a);
    this.hsb = Number(b);

    if (!Number.isFinite(this.hsa) || !Number.isFinite(this.hsb)) {
      this.result = 'He so khong hop le';
    } else if (this.hsa === 0 && this.hsb === 0) {
      this.result = 'Vo so nghiem';
    } else if (this.hsa === 0) {
      this.result = 'Vo nghiem';
    } else {
      const x = -this.hsb / this.hsa;
      this.result = `x = ${x}`;
    }
  }
}
