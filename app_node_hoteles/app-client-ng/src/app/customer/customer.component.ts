import { Component, OnInit } from '@angular/core';
import {Customer} from "./../models/customer.model";
import {CustomerService} from "./../services/customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [CustomerService] 
})
export class CustomerComponent implements OnInit {

  customer:Customer;
  customers:Customer[];
  customServ: CustomerService;

  constructor(customerServ: CustomerService) { 
    this.customServ= customerServ;
  }

  ngOnInit() {
     this.customer= new Customer();
     this.customers=[];
  }
  enviar(){
    this.customServ.enviar(this.customer);    
    this.customer= new Customer(); 
  }
  recibir(){
     this.customServ.recibir(this.customer, function(datos){
       var a =JSON.stringify(datos);
      //  this.customers
       alert("Hemos recibido datos\n" + a);
     });    
  }

}
