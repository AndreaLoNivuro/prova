import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.scss']
})
export class SecondoComponent implements OnInit {

  testo: string = 'Iniziale';
  constructor() { }

  ngOnInit(): void {
  }

  clickEvent(ev: MouseEvent, param: number) {
    if (param === 2) {
      this.testo = 'Default';
    }
    console.log('Ho cliccato un pulsante '+param);
    ev.stopPropagation();
    //serve per fermare la propagazione del clic
  }

  inputEvent(ev /*: InputEvent*/) {
    this.testo = ev.target.value;
    //target si riferisce all'input se è input, botton se è botton, ecc
    //value è una proprietà dei campi di imput, ed indica ciò 
    //che c'è scritto dentro
  }

}
