import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductViewComponent } from './product-view/product-view.component';
import { HomeComponent  } from "./home/home.component";


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"prd/:id",
    component:ProductViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
