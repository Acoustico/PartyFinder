import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchpComponent } from './Components/searchp/searchp.component';
import { FooterComponent } from './Components/footer/footer.component';
<<<<<<< HEAD
import { createPComponent } from './Components/createP/createP.component';
=======
import { ProductsComponent } from './Components/products/products.component';
import { HomeComponent } from './Components/home/home.component';
import { CreatepComponent } from './Components/createp/createp.component';
>>>>>>> 9245eb0873c04504f1abf10cd996036cfdf07b80

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    SearchpComponent,
    createPComponent,
    FooterComponent,
    ProductsComponent,
    HomeComponent,
    CreatepComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
