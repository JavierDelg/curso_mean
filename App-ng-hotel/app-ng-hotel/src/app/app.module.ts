import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReservasComponent } from './reservas/reservas.component';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const appRoutes: Routes = [
  { path: 'reservas', component: ReservasComponent },
   { path: 'index', component: IndexComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ReservasComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
