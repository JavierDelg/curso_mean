import { Component } from '@angular/core';

class Reserva{
  nombre:string;
  email:string;
  tipo:string;
  fecha:any;
  constructor(n?:string,e?:string,t?:string,f?:any){
    this.nombre=n;
    this.email=e;
    this.tipo=t;
    this.fecha=f;
  }

  toString():string{
    return this.nombre + " " + this.email + " " + this.tipo + " " + this.fecha;
  }


}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  reserva1= new Reserva();
  ArrayReservas = [];
  reservar(){
    console.log(this.reserva1);
    this.ArrayReservas.push(this.reserva1);
    this.reserva1= new Reserva();
    
  }
  borrar(i){
      console.log(i);
      this.ArrayReservas.splice(i);
  }

}
