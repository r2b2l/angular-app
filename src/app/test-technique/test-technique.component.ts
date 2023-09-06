import { Component } from '@angular/core';

@Component({
  selector: 'app-test-technique',
  templateUrl: './test-technique.component.html',
  styleUrls: ['./test-technique.component.scss']
})
export class TestTechniqueComponent {
  public isShow:boolean = false;
  public account: number = 0;
  public topupAmount: number = 0;

  showMessage(): void {
    this.isShow = true;
  }

  addAmount(): void {
    this.account = +this.account + +this.topupAmount;
  }
}
