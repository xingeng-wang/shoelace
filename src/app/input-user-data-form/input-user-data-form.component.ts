import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'input-user-data-form',
  templateUrl: './input-user-data-form.component.html',
  styleUrls: ['./input-user-data-form.component.css']
})
export class InputUserDataFormComponent implements OnInit {

  templates = [
    {id: 'singleImageAd', value: 'Single Image Ad'},
    {id: 'carouselAd', value: 'Carousel Ad'}
  ];
  repeats = [
    {id: 'daily', value: 'Daily'},
    {id: 'weekly', value: 'Weekly'},
    {id: 'monthly', value: 'Monthly'}
  ];

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      template: ['', Validators.required],
      repeat: ['', Validators.required],
      isActivate: ['true', Validators.required],
      date: ['', Validators.required]
    });
  }

  submit() {
    const data = this.formGroup.getRawValue();
    if (this.formGroup.invalid) {
      this.openSnackBar('Please Fill in the Missing Data');
      return;
    }
    this.openSnackBar('Data submit Succeed');
  }

  cancel() {
    this.router.navigate([``], {relativeTo: this.route});
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, null, {duration: 1500});
  }


}
