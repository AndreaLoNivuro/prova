import { Component, ViewChild } from '@angular/core';
import { CiclovitaComponent } from './ciclovita/ciclovita.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(CiclovitaComponent)
  private ciclovitaComponentRef: CiclovitaComponent;
  
  title = 'Cablata';

  componentToShow: number = 1;

  clickAppComponent(value: string) {
    console.log("Cliccato da secondo in app: " + value);
  }

  showComponent() {
    if (this.componentToShow === 2) {
      this.componentToShow = 1;
    }else {
      this.componentToShow++;
    }
  }

}
