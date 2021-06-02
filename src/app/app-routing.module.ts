import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchpComponent } from './Components/searchp/searchp.component';
import { ProductsComponent } from './Components/products/products.component';
import { HomeComponent } from './Components/home/home.component';
//import { CreatepComponent } from "./Components/createp/createp.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "searchp", component: SearchpComponent },
  //{ path: "createp", component: CreatepComponent },
  { path: "products", component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
