import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class FootballService {

  private BASE_API = 'https://api.football-data.org/v1';
  private league_id:number = 0;
  private API = {
    GET_COMPETITION: '/competitions/',
    GET_LEAGUE_TABLE : `/leagueTable`
  };
  private headers: Headers;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.setHeader(this.headers);
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

  getLeagueTable(league_id){
    this.league_id = league_id;
    let url = `${this.BASE_API}${this.API.GET_COMPETITION}${this.league_id}${this.API.GET_LEAGUE_TABLE}`;
    return this.http.get(url, {
      headers: this.headers
    }).debounceTime(300).map(
      (resp) => resp.json()
    );
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
