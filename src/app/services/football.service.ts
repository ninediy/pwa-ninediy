import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class FootballService {

  private BASE_API = 'https://api.football-data.org/v1';
  private league_id: number = 0;
  private API = {
    GET_COMPETITION: '/competitions/',
    GET_LEAGUE_TABLE: '/leagueTable',
    GET_TEAM_DATA: '/teams/',
    GET_TEAM_PLAYER: '/players'
  };
  private headers: Headers;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.setHeader(this.headers);
  }

  saveNote(txt: string) {
    if (window.localStorage.getItem('notes')) {
      let arrData = JSON.parse(window.localStorage.getItem('notes'));
      let date = new Date();
      arrData.push({
        id: arrData.length + 1,
        content: txt,
        created_at: date
      });
      window.localStorage.setItem('notes', JSON.stringify(arrData));
    } else {
      let date = new Date();
      let arrData = [{ id: 1, content: txt, created_at: date }];
      window.localStorage.setItem('notes', JSON.stringify(arrData));
    }
  }

  getNote() {
    if (window.localStorage.getItem('notes')) {
      let arrData = JSON.parse(window.localStorage.getItem('notes'));
      return arrData;
    } else {
      return null;
    }
  }


  setHeader(headers: Headers) {
    headers.append("X-Auth-Token", "d51b7cada8ca4dc1abe040f65070e6fc");
    headers.append('X-Response-Control', 'minified');
  }

  getCompetitions(season: number = 2016) {
    let url = `${this.BASE_API}${this.API.GET_COMPETITION}?season=${season}`;
    return this.http.get(url, {
      headers: this.headers
    }).debounceTime(300).map(
      (resp) => resp.json()
      );
  }

  getLeagueTable(league_id) {
    if (league_id) {
      this.league_id = league_id;
      let url = `${this.BASE_API}${this.API.GET_COMPETITION}${this.league_id}${this.API.GET_LEAGUE_TABLE}`;
      return this.http.get(url, {
        headers: this.headers
      }).debounceTime(300).map(
        (resp) => resp.json()
        );
    } else {
      return null;
    }

  }

  getTeamDetail(team_id: number) {
    if (team_id) {
      let url = `${this.BASE_API}${this.API.GET_TEAM_DATA}${team_id}`;
      return this.http.get(url, {
        headers: this.headers
      }).debounceTime(300).map(
        (resp) => resp.json()
        );
    } else {
      return null;
    }
  }

  getTeamPlayer(team_id: number) {
    if (team_id) {
      let url = `${this.BASE_API}${this.API.GET_TEAM_DATA}${team_id}${this.API.GET_TEAM_PLAYER}`
      return this.http.get(url, {
        headers: this.headers
      }).debounceTime(300).map(
        (resp) => resp.json()
        );
    } else {
      return null;
    }
  }

  saveFavTeamID(team_id: number): Boolean {
    window.localStorage.setItem('fav_team_id', team_id.toString());
    return true;
  }

  getFaveTeamID(): number {
    let team_id = window.localStorage.getItem('fav_team_id');
    if (team_id) {
      return +team_id;
    }else{
      return null;
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
