import { Component } from '@angular/core';

class Room{
  _id:any;
  type:boolean
  numero: number;
  constructor(_id:any,numero:number ,type:boolean){
    this._id=_id;
    this.numero=numero;
    this.type = type;
  }

  toString():string{
    return  this._id + " " + this.numero + " " + ((this.type) ? "Doble" : "Simple");
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

var room1= new Room(null,101,true);
var room2= new Room(null,102,false);
var room3= new Room(null,103,false);
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
  room;

  onSelect(index){
      alert(index);
      let room= this.hotel1[index];
      console.log(this.room);
  }

  updateRoom(room){
    
   console.log(room);
   
  }
  
}
