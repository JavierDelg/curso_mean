import { Component } from '@angular/core';

class Room{
  _id:any;
  type:string
  numero: number;
  constructor(_id?:any,numero?:number ,type?:string){
    this._id=_id;
    this.numero=numero;
    this.type= type;
  }

  toString():string{
    return  this._id + " " + this.numero + " " + this.type;
  }
}

class Hotel{
  arrayRooms:Room[]=[];

  saveRoom(room){
    this.arrayRooms.push(room);
  }

  toString():string{
    return "Habitaciones del Hotel: " + this.arrayRooms;
  }
}

var room1= new Room(1,101,"Simple");
var room2= new Room(2,102,"Doble");
var room3= new Room(3,103,"Simple");
var hotel = new Hotel();

hotel.saveRoom(room1);
hotel.saveRoom(room2);
hotel.saveRoom(room3);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.1.css']
  
})

export class AppComponent {

  title = "Habitaciones";
  hotel1 = [room1, room2, room3];
  hotel2 = hotel; 
  
room = new Room();
  onSelect(room){
     console.log(room);
     this.room=room; 
  }

  
}
