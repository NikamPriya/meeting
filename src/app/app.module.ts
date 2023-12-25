import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { BookingComponent } from './pages/booking/booking.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientComponent } from './pages/client/client.component';
import { UserComponent } from './pages/user/user.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { LoaderComponent } from './pages/loader/loader.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToggleDirective } from './shared/directives/toggle.directive';
import { PackagesComponent } from './pages/packages/packages.component';
import { ClientPackagesComponent } from './pages/client-packages/client-packages.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    BookingComponent,
    HomeComponent,
    ClientComponent,
    UserComponent,
    RoomsComponent,
    LoaderComponent,
    ToggleDirective,
    PackagesComponent,
    ClientPackagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:'toast-center-center',
      preventDuplicates: true,
      closeButton: true
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
