import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  useractivity!: Useractivity[];
  constructor(private userService: UserService,private router: Router,) { }

  ngOnInit() {
    this.userService.getAllUserActivities()
        .pipe(first())
        .subscribe(users => this.useractivity = users);
        console.log(this.useractivity);
}

deleteUser(id: number) {
  debugger
  this.userService.deleteactivity(id)
      .pipe(first())
      .subscribe(() => window.location.reload());
}

}
