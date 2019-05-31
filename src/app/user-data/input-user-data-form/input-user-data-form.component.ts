import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

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
              private router: Router, private route: ActivatedRoute, private userDataService: UserDataService) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      template: ['', Validators.required],
      repeat: ['', Validators.required],
      isActivate: ['true', Validators.required],
      startDate: ['', Validators.required]
    });
  }

  submit() {
    const data = this.formGroup.getRawValue();
    if (this.formGroup.invalid) {
      this.openSnackBar('Please Fill in the Missing Data', false);
      return;
    }
    const name = data['name'];
    const template = data['template'];
    const repeat = data['repeat'];
    const isActivate = data['isActivate'];
    const startDate = data['startDate'];
    const newDate = new Date(startDate).toDateString();
    this.userDataService.createUserData(name, template, repeat, isActivate, newDate).subscribe(() => {
      this.openSnackBar('Data submit Succeed', true);
    }, () => this.openSnackBar('Errored, please try again later!', false));
  }

  cancel() {
    this.router.navigate([``], {relativeTo: this.route});
  }

  openSnackBar(message: string, succeed: boolean) {
    const config = {duration: 1500} as MatSnackBarConfig;
    if (succeed) {
      config.panelClass = 'snackbar-success';
    } else {
      config.panelClass = 'snackbar-error';
    }
    this.snackBar.open(message, null, config);
  }
}
