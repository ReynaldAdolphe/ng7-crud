import { ActorService } from './shared/actor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ActorsComponent } from './actors/actors.component';
import { ActorListComponent } from './actors/actor-list/actor-list.component';
import { ActorComponent } from './actors/actor/actor.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ActorsComponent,
    ActorListComponent,
    ActorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ActorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
