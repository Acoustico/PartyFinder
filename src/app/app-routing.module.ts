import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchpComponent} from './Components/searchp/searchp.component';
import {createPComponent} from './Components/createP/createP.component';


const routes: Routes = [
{path: '' , component: SearchpComponent},
{path: 'create' , component: createPComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
