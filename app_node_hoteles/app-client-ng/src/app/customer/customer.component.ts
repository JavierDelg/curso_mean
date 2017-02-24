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
  customServ: CustomerService;

  constructor(customerServ: CustomerService) { 
    this.customServ= customerServ;
  }

  ngOnInit() {
     this.customer= new Customer();
  }
  enviar(){
    this.customServ.enviar(this.customer);    
  }

}
