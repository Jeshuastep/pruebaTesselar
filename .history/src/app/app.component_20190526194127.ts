
import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pruebaTesselar';
  bestSellers: any;
  reseñas: any;
  constructor(private servicioApp: AppService ) { }

  ngOnInit() {
   this.obtenerDatos();
  }

  obtenerDatos(){
    this.servicioApp.getJSON().subscribe(results => this.bestSellers = results.products);
    this.servicioApp.getJSON().subscribe(results => this.reseñas = results.reseñas);
    this.complementarArray();
  }
  complementarArray(){
    this.bestSellers.forEach(element => {
      if(element.id == this.reseñas.id) {
        this.reseñas.forEach(elm => {
          this.bestSellers.push(elm.stars);
        });
      }
    });
  }

}
