import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { NoteComponent } from './note/note.component';
import { LeagueComponent } from './league/league.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'fav',
    component: FavoriteComponent
  }, {
    path: 'leage',
    component: LeagueComponent
  }, {
    path: 'note',
    component: NoteComponent
  },
  {
    path: 'team/:id',
    component: TeamDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
