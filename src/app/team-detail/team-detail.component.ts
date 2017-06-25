import { Component, OnInit } from '@angular/core';
import { FootballService } from '../services/football.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {

  public TeamData;
  public team_id = '';
  public PlayerData;

  constructor(
    private footballservice: FootballService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => params['id'])
      .subscribe((resp) => {
        if (resp) {
          this.team_id += resp;
        }
      });
    if (this.team_id.length > 1) {
      this.doGetTeamData(+this.team_id);
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
