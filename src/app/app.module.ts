import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponentComponent } from './home-component/home-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { GalleryComponentComponent } from './gallery-component/gallery-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';

@NgModule({
  declarations: [
    AppComponent,    
    HomeComponentComponent,
    ContactComponentComponent,
    AboutComponentComponent,
    GalleryComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
