import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavalsComponent } from './navals/navals.component';
import { RomanceComponent } from './romance/romance.component';
import { StoriesComponent } from './stories/stories.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { DataService } from './data.service';
import { HomecardComponent } from './homecard/homecard.component';
import { Romancechild1Component } from './romancechild1/romancechild1.component';
import { Romancechild2Component } from './romancechild2/romancechild2.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';


const router : Routes = [

  {path : "", component : HomeComponent},
  {path : "homecard/:id", component : HomecardComponent},
  {path : "navals", component : NavalsComponent},
  {path : "romance", component : RomanceComponent,
  children : 
  [
   {path : "romancechild1", component : Romancechild1Component},
   {path : "romancechild2", component : Romancechild2Component}
  ]
  },
  {path : "login", component : LoginComponent},
  {path : "stories", component : StoriesComponent, canActivate : [AuthService]},
  {path : "history", component : HistoryComponent},
  // {path : "navals", component : NavalsComponent},
  {path : "**", component : ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavalsComponent,
    RomanceComponent,
    StoriesComponent,
    HistoryComponent,
    HomeComponent,
    ErrorComponent,
    HeaderComponent,
    HomecardComponent,
    Romancechild1Component,
    Romancechild2Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router),
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
