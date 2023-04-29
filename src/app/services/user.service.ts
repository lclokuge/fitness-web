import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Useractivity } from '../model/useractivity';


const baseUrl = 'https://mi-linux.wlv.ac.uk/~2220588/fitness-api/public/api/activity';
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  getAllUserActivities() {
    return this.http.get<Useractivity[]>(`https://mi-linux.wlv.ac.uk/~2220588/fitness-api/public/api/activity/getAllUserActivities`);
  }
}
