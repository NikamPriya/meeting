import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { BookingComponent } from './pages/booking/booking.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientComponent } from './pages/client/client.component';
import { UserComponent } from './pages/user/user.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { ClientPackagesComponent } from './pages/client-packages/client-packages.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
    
      {
        path:'Booking',
        component:BookingComponent,
      },
      
      {
        path: 'client',
        component: ClientComponent,
      },
      {
        path:'User',
        component:UserComponent,
      },
      {
        path:'packages',
        component:PackagesComponent,
      },
      {
        path:'client-packages',
        component:ClientPackagesComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
