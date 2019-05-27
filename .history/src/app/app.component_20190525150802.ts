import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  bestSellers: any;
  constructor(private servicioApp: AppService ) { }

  ngOnInit() {
    this.bestSellers = this.servicioApp.getJSON();
    console.log(this.bestSellers);
  }

}
