import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import{AboutComponentComponent} from './about-component/about-component.component';
import { GalleryComponentComponent } from './gallery-component/gallery-component.component';

const routes: Routes = [
  {path: 'home', component:HomeComponentComponent},
  {path: 'contact', component:ContactComponentComponent },  
  {path: 'about' , component:AboutComponentComponent},
  {path: 'gallery',component:GalleryComponentComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  
  // {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
