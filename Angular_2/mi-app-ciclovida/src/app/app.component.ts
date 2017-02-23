import { Component, OnInit, OnChanges ,DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,AfterViewChecked,OnDestroy,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges ,DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  title = 'app works!';
  mensajes:String[] = [];
  contador: number = 0;

  hacerClick(){
  	this.contador++;
  	this.title += " pulsa " + this.contador;
  }
  ngOnChanges(cambios:SimpleChanges){
  	this.ng("ngOnChanges" + cambios);
  }

  ngOnInit(){
  	this.ng("ngOnInit");
  }
 ng(mensaje : string){
 	this.mensajes.push(new Date().toISOString() + ": " + mensaje);
 }
 ngDoCheck(){
	this.ng("ngDoCheck");
 }
 ngAfterContentInit(){
	this.ng("ngAfterContentInit");
 }
 ngAfterContentChecked(){
	this.ng("ngAfterContentChecked");
 }
 ngAfterViewInit(){
	this.ng("ngAfterViewInit");
 }
 ngAfterViewChecked(){
	this.ng("ngAfterViewChecked");
 }
 ngOnDestroy(){
 		this.ng("ngOnDestroy");
 }


}
