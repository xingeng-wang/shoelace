import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputUserDataFormComponent } from './user-data/input-user-data-form/input-user-data-form.component';
import {
  MatFormFieldModule,
  MatNativeDateModule,
  MatSelectModule,
  MatInputModule,
  MatRadioModule,
  MatDatepickerModule,
  MatCardModule,
  MatButtonModule,
  MatSnackBarModule,
  MatTableModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDataListComponent } from './user-data/user-data-list/user-data-list.component';
import { RouterModule, Routes } from '@angular/router';
import { UserDataService } from './user-data/user-data.service';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  {path: '', component: UserDataListComponent},
  {path: 'create', component: InputUserDataFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    InputUserDataFormComponent,
    UserDataListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatRadioModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
