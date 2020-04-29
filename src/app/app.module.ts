import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AboutComponent } from './about/about.component'
import { LoginComponent } from './login/login.component'
import { NavbarComponent } from './navbar/navbar.component'
import { LogoutComponent } from './logout/logout.component'
import { RegisterComponent } from './register/register.component'
import { AddDetailsComponent } from './add-details/add-details.component'
import { EditDetailsComponent } from './edit-details/edit-details.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    AboutComponent,
    AddDetailsComponent,
    EditDetailsComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
