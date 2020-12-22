import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-woman-store',
  templateUrl: './woman-store.component.html',
  styleUrls: ['./woman-store.component.scss']
})
export class WomanStoreComponent implements OnInit {
  name = 'Women\'s jacket';
  e: number = Math.E;
  float = 20.50;
  constructor() { }

  ngOnInit(): void {
  }

}
