import { Component, OnInit, Input } from '@angular/core';
import { Competition } from '../models/Competition';
import { FootballService } from '../services/football.service';
import { MdDialog } from '@angular/material';
import { DialogLeagueDetailComponent } from '../dialog/dialog-league-detail/dialog-league-detail.component';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.scss']
})
export class LeagueListComponent implements OnInit {
  public default_season = 2016;
  public competitions: Competition[];
  public yearStore: Array<any> = [];
  public data = {
    Season: this.default_season
  };

  constructor(
    private footballService: FootballService,
    private dialog: MdDialog,
    private snackBar: MdSnackBar) { }

  ngOnInit(): void {
    this.doGetCompetitions(this.default_season);
    this.getYear();
  }

  doGetCompetitions(season: number = 2016) {
    this.footballService.getCompetitions(season)
      .subscribe((resp) => {
        this.competitions = resp;
        this.openSnackBar('เลือกลีกที่ต้องการดูข้อมูล','Tips');
      });
  }

  onSeasonChange() {
    this.competitions = null;
    this.doGetCompetitions(this.data.Season);
  }

  getYear() {
    let d = new Date();
    let now_year = d.getFullYear();
    let i = 0;
    this.yearStore.push(now_year);
    while (i < 3) {
      this.yearStore.push(now_year--);
      i++;
    }
  }

  openDialog(league_id) {
    console.log(league_id);
    this.dialog.open(DialogLeagueDetailComponent, {
      height: '600px',
      width: '100%',
      data: { league_id: league_id }
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}