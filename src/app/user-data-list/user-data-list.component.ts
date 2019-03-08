import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'user-data-list',
  templateUrl: './user-data-list.component.html',
  styleUrls: ['./user-data-list.component.css']
})

export class UserDataListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'template', 'repeat', 'isActivate', 'date'];
  dataSource = [
  {name: 'xin', template: 'Hydrogen', repeat: 'csaa', isActivate: true, date: Date.now().toString()},
];

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
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
  date: string;
}
