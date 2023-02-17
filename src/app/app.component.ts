import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  datasource = [
    ['1', '2', '3', '4'],
    ['5', '6', '7', '8'],
    ['9', '*', '/', '()'],
    ['=', '+', '-']
  ]

  result = '';


  onClickButton(value: string) {
    this.result += value;
  }

}
