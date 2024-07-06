import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoteComponent } from './note/note.component';
import { BusinessComponent } from './business/business.component';
import { TechComponent } from './tech/tech.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'notes', component: NoteComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'tech', component: TechComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
