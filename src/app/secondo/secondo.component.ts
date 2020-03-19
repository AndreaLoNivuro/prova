import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.scss']
})
export class SecondoComponent implements OnInit {

  testo: string = 'Iniziale';
  
  @Output()
  myClick: EventEmitter<string> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  clickEvent(ev: MouseEvent, param: number) {
    if (param === 2) {
      this.myClick.emit(this.testo);
      //metodo che si può richiamare sugli EventEmitter
      //emette l'evento, scatena l'evento, è come l'equivalente di 
      //cliccare il pulsante che ha l'evento di click
      //essendo di tipo stringa come inizializzato sopra, possiamo inserire il testo che deve assumere
      this.testo = 'Default';
      //se il pulsante viene cliccato due volte esce Default
    }
    console.log('Ho cliccato un pulsante '+param);
    ev.stopPropagation();
    //serve per fermare la propagazione del clic
    //così se clicco il bottone, non mi clicca anche il div in cui è all'interno
  }

  inputEvent(ev /*: InputEvent*/) {
    this.testo = ev.target.value;
    //target si riferisce all'input se è input, botton se è botton, ecc
    //value è una proprietà dei campi di imput, ed indica ciò 
    //che c'è scritto dentro
  }

  clickNew(value: string) {
    console.log(value)
  }

}
