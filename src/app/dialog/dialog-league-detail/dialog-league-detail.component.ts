import { Component, OnInit, Input, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';
import { FootballService } from '../../services/football.service';
import { Router } from '@angular/router';
import { MdDialog } from '@angular/material';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-dialog-league-detail',
  templateUrl: './dialog-league-detail.component.html',
  styleUrls: ['./dialog-league-detail.component.scss']
})

export class DialogLeagueDetailComponent implements OnInit {

  public leagueData;
  constructor(
    @Inject(MD_DIALOG_DATA) private data: any,
    private footballService: FootballService,
    private router: Router,
    private dialog: MdDialog,
    private snackBar: MdSnackBar
  ) {
    this.doGetLeagueTable();
  }

  ngOnInit(): void { }

  doGetLeagueTable() {
    this.footballService.getLeagueTable(this.data.league_id).subscribe(resp => {
      this.leagueData = resp;
      this.openSnackBar('เลือกทีมที่ต้องการดูข้อมูล','Tips');
    });
  }

  onSelectTeam(team_id: number) {
    this.dialog.closeAll();
    this.router.navigate(['team/', team_id]);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
