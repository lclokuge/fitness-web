import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-addedit-activities',
  templateUrl: './addedit-activities.component.html',
  styleUrls: ['./addedit-activities.component.css']
})
export class AddeditActivitiesComponent implements OnInit {
  form!: FormGroup;
  id!: string;
  isAddMode!: boolean;
  loading = false;
  submitted = false;

  constructor( 
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService
      ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      activity: ['', Validators.required],
      activeEndDate: ['', Validators.required],
      duration: ['', Validators.required],
      calories: ['', Validators.required],
      distance: ['', Validators.required],
      note: ['', Validators.required],
     
  },);

  }


  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    
}
}
