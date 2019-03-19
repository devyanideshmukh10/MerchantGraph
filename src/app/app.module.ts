import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AlertModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material'; 
import {MatButtonModule} from '@angular/material/button';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {  MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';

import { DialogOverviewExampleDialog } from './dashboard/dashboard.component';







@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    NgMatSearchBarModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule

  ],
  entryComponents: [DialogOverviewExampleDialog],
  providers: [MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
