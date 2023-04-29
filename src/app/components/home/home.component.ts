import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { User } from 'src/app/model/user';
import { Useractivity } from 'src/app/model/useractivity';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users!: Useractivity[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUserActivities()
        .pipe(first())
        .subscribe(users => this.users = users);
        console.log(this.users);
}

deleteUser(id: number) {
  
}

}
