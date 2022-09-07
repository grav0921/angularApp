import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  showFiller = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  click(w:string) {
    return console.log(w);
  }
  isHandset$ = true;
  mode : string='side';
}


