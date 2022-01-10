import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.title = i
    }
  }

  title = 0;



}


