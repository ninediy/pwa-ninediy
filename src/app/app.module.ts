import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { FootballService } from './services/football.service';

import {
  MdIconModule,
  MdButtonModule,
  MdCardModule,
  MdMenuModule,
  MdToolbarModule,
  MdSidenavModule,
  MdCheckboxModule,
  MdListModule,
  MdTabsModule,
  MdProgressSpinnerModule,
  MdSelectModule,
  MdDialogModule,
  MdInputModule,
  MdGridListModule,
  MdSnackBarModule
} from '@angular/material';

import 'hammerjs';
import { FavoriteComponent } from './favorite/favorite.component';
import { LeagueComponent } from './league/league.component';
import { NoteComponent } from './note/note.component';
import { LeagueListComponent } from './league-list/league-list.component';
import { DialogLeagueDetailComponent } from './dialog/dialog-league-detail/dialog-league-detail.component';
import { NoteFormComponent } from './dialog/note-form/note-form.component';
import { OrderByPipe } from './order-by-pipe.pipe';
import { TeamDetailComponent } from './team-detail/team-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoriteComponent,
    LeagueComponent,
    NoteComponent,
    LeagueListComponent,
    DialogLeagueDetailComponent,
    NoteFormComponent,
    OrderByPipe,
    TeamDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdSidenavModule,
    MdCheckboxModule,
    MdListModule,
    MdTabsModule,
    MdProgressSpinnerModule,
    MdSelectModule,
    MdDialogModule,
    MdInputModule,
    MdGridListModule,
    MdSnackBarModule
  ],
  entryComponents: [
    DialogLeagueDetailComponent,
    NoteFormComponent
  ],
  providers: [FootballService],
  bootstrap: [AppComponent]
})
export class AppModule { }
