import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclovita',
  templateUrl: './ciclovita.component.html',
  styleUrls: ['./ciclovita.component.scss']
})
export class CiclovitaComponent implements OnInit {
  title: string = 'titolo';
  constructor() { }

  ngOnInit(): void {
  }

  prendiTitolo() {
    return this.title;
  }

}
