import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { FeedsComponent } from "./feeds/feeds.component";
import { AuthGuard } from './auth.guard';

const routes: Routes = [{
  path:'',
  component:LoginComponent
},{
  path:'register',
  component:RegisterComponent
},
{
  path:'feeds',
  component:FeedsComponent,
  canActivate:[AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
