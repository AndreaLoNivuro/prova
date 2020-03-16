import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prova';
  getVal() {
    return 2;
  }

  //esempio prova per capire come funziona innerHTML
  HTMLString = '<div><p>Prova1</p></div>';
}
