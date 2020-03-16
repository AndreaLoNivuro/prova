import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.scss']
})
export class PrimoComponent implements OnInit {
  title = 'prova';
  getVal() {
    return 2;
  }

  HTMLString = '<div><p>Prova1</p></div>';

  linkUrl = 'https://google.it';

  @Input()
  titoloInput: string;

  lista = [1,2,5,6];

  myDate: Date = new Date();

  oggetto: {chiave: string};
  oggetto1: {chiave: string} = {
    chiave: 'valore'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
