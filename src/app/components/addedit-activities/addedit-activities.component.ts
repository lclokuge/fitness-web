import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, first } from 'rxjs';
import { User } from 'src/app/model/user';
import { Useractivity } from 'src/app/model/useractivity';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-addedit-activities',
  templateUrl: './addedit-activities.component.html',
  styleUrls: ['./addedit-activities.component.css']
})
export class AddeditActivitiesComponent implements OnInit {
  form!: FormGroup;
  id!: number;
  isAddMode!: boolean;
  loading = false;
  submitted = false;
  user!: User[];
  useract!: Useractivity;
  activities!:Observable<any>

  constructor( 
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService
       
      ) { 
        
      }

  ngOnInit(): void {
    
    this.loadAllUsers();
    this.id = this.route.snapshot.params['id'];
        this.isAddMode = !this.id;
        let currentDateTime =formatDate(new Date(), 'yyyy/MM/dd', 'en');
    this.form = this.formBuilder.group({
      user_id: ['', Validators.required],
      activity_id: ['', Validators.required],
      date: [currentDateTime],
      duration: ['', Validators.required],
      calories: ['', Validators.required],
      distance: ['', Validators.required],
      note: ['', Validators.required],
     
  },);

  if (!this.isAddMode) {
    debugger
    this.activities =this.userService.getUserActivityById(this.id);
    this.activities.subscribe(val => {
      console.log(val);
      this.useract = val;
      this.form.patchValue({user_id:this.useract.user_id,
        duration:this.useract.duration
      });
    });
          
}
  
  }
  loadAllUsers() {
    debugger;
    this.userService.getAllUser()
        .pipe(first())
        .subscribe(users => this.user = users);
        console.log("user: "+this.user);
  }


  get f() { return this.form.controls; }

  onSubmit() {
    debugger
    this.submitted = true;

    

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    this.loading = true;
    if (this.isAddMode) {
        this.createUserActivity();
    } else {
        this.updateUserActivity();
    }

    
}
  updateUserActivity() {
    throw new Error('Method not implemented.');
  }
  createUserActivity() {
    debugger
    this.userService.createUserActivity(this.form.value)
    .pipe(first())
    .subscribe(() => {
        this.router.navigate(['../'], { relativeTo: this.route });
    })
    .add(() => this.loading = false);
  }
}
