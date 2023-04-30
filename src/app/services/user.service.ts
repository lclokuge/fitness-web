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

  getAllUser() {
    return this.http.get<User[]>(`https://mi-linux.wlv.ac.uk/~2220588/fitness-api/public/api/user/getAllUsers`);
  }

  createUserActivity(params: any) {
    return this.http.post('https://mi-linux.wlv.ac.uk/~2220588/fitness-api/public/api/activity/create', params);
}

getUserActivityById(id: number) {
  return this.http.get<Useractivity>(`https://mi-linux.wlv.ac.uk/~2220588/fitness-api/public/api/activity/getActivitiesByid/${id}`);
}

deleteactivity(id: number) {
  return this.http.post(`https://mi-linux.wlv.ac.uk/~2220588/fitness-api/public/api/activity/deleteUserActivity/${id}`,{});
}

}
