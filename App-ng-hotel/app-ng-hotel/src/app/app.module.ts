import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReservasComponent } from './reservas/reservas.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
   { path: 'reservas', component: ReservasComponent },
   { path: 'admin', component: AdminComponent },
   { path: '',   redirectTo: '/reservas', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ReservasComponent,
    AdminComponent
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
