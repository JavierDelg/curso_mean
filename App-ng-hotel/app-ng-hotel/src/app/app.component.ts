import { Component } from '@angular/core';

class Reserva{
  nombre:string;
  email:string;
  tipo:string;
  fecha:string;
  constructor(n?:string,e?:string,t?:string,f?:string){
    this.nombre=n;
    this.email=e;
    this.tipo=t;
    this.fecha=f;
  }

  toString():string{
    return this.nombre + this.email + this.tipo + this.fecha;
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
  reservas(){
    console.log(this.reserva1);
  }

}
