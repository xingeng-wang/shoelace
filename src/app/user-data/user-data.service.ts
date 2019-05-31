import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, map} from 'rxjs/operators';

export interface UserData {
  id: string;
  name: string;
  template: string;
  repeat: string;
  isActivate: boolean;
  date: Date;
}

@Injectable()
export class UserDataService {
  host = 'http://localhost:3000';
  isLoading$$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(private http: HttpClient) {
  }

  get isLoading$(): Observable<boolean> {
    return this.isLoading$$.asObservable();
  }

  listUserData(): Observable<UserData[]> {
    this.isLoading$$.next(true);
    const url = this.host + '/api/v1/list-user-data';
    return this.http.get(url).pipe(
      map((userDataList: UserData[]) => userDataList),
      finalize(() => this.isLoading$$.next(false)),
    );
  }

  createUserData(name: string, template: string, repeat: string, isActivate: boolean, startDate: string): Observable<any> {
    const url = this.host + '/api/v1/create-user-data';
    const body = {
      name: name,
      template: template,
      repeat: repeat,
      isActivate: isActivate,
      startDate: startDate
    };
    return this.http.post(url, body);
  }
}
