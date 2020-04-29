import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LogoutComponent } from './logout/logout.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { ActivateService } from './services/activate.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: "login", redirectTo: "" },
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent, canActivate: [ActivateService] },
  { path: "about", component: AboutComponent, canActivate: [ActivateService] },
  { path: "reg", component: RegisterComponent },
  { path: "logout", component: LogoutComponent, canActivate: [ActivateService] },
  { path: "add", component: AddDetailsComponent, canActivate: [ActivateService] },
  { path: "edit", component: EditDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
