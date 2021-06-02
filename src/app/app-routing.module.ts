import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import {SearchpComponent} from './Components/searchp/searchp.component';
import {createPComponent} from './Components/createP/createP.component';


const routes: Routes = [
{path: '' , component: SearchpComponent},
{path: 'create' , component: createPComponent}

=======
import { SearchpComponent } from './Components/searchp/searchp.component';
import { ProductsComponent } from './Components/products/products.component';
import { HomeComponent } from './Components/home/home.component';
//import { CreatepComponent } from "./Components/createp/createp.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "searchp", component: SearchpComponent },
  //{ path: "createp", component: CreatepComponent },
  { path: "products", component: ProductsComponent }
>>>>>>> 9245eb0873c04504f1abf10cd996036cfdf07b80
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
