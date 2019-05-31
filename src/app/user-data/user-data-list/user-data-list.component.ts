import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDataService } from '../user-data.service';


@Component({
  selector: 'user-data-list',
  templateUrl: './user-data-list.component.html',
  styleUrls: ['./user-data-list.component.css']
})

export class UserDataListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'template', 'repeat', 'isActivate', 'startDate'];
  dataSource = [
  {name: 'xin', template: 'Hydrogen', repeat: 'csaa', isActivate: true, startDate: Date.now().toString()},
];

  usersData$: Observable<any[]>;

  constructor(private router: Router, private route: ActivatedRoute, private userDataService: UserDataService) {
  }

  ngOnInit() {
    this.usersData$ = this.userDataService.listUserData();
    this.usersData$.subscribe(console.log);
  }

  create() {
    this.router.navigate([`./create`], {relativeTo: this.route});
  }


}

export interface PeriodicElement {
  name: string;
  template: string;
  repeat: string;
  isActivate: boolean;
  startDate: string;
}
