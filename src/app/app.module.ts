import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoteComponent } from './note/note.component';
import { AppCardComponent } from './app-card/app-card.component';
import { BusinessComponent } from './business/business.component';
import { TechComponent } from './tech/tech.component';
import { AppCardBusinessComponent } from './app-card-business/app-card-business.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoteComponent,
    AppCardComponent,
    BusinessComponent,
    TechComponent,
    AppCardBusinessComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
