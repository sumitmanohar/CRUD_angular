import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:HomeComponent}
    ])

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
