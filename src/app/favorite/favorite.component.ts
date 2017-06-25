import { Component, OnInit } from '@angular/core';
import { FootballService } from '../services/football.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  public favTeam;
  public status_fav: boolean = true;
  public TeamData;
  public PlayerData;
  constructor(
    private footballservice: FootballService
  ) { }

  ngOnInit() {
    this.doGetMyFavTeam();
  }

  doGetMyFavTeam() {
    let Team_id = this.footballservice.getFaveTeamID();
    if (Team_id) {
      this.doGetTeamData(Team_id);
    } else {
      this.status_fav = false;
    }
  }

  doGetTeamData(team_id: number) {
    let team = this.footballservice.getTeamDetail(team_id);
    if (team) {
      team.subscribe((resp) => {
        this.TeamData = resp;
        this.doGetTeamPlayer(team_id);
      });
    }
  }

  doGetTeamPlayer(team_id: number) {
    let player = this.footballservice.getTeamPlayer(team_id);
    if (player) {
      player.subscribe((resp) => {
        this.PlayerData = resp;
      });
    }
  }

}
