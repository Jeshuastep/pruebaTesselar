import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private servicioApp: AppService ) { }

  ngOnInit() {
    this.servicioApp.getJSON().subscribe(data => {
      console.log(data);
    });
  }

}
