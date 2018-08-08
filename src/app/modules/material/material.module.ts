import { DateFormat } from '../../formatos/date-format';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import * as moment from 'moment';
import { 
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
  DateAdapter,
  MatProgressSpinnerModule,
  MatSnackBarModule
 } from '@angular/material'
 import {CalendarModule} from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexPipe } from '../../pipes/index.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers:[
    {provide: DateAdapter, useClass:DateFormat},
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    CalendarModule,
    IndexPipe
  ],
  declarations: [
    IndexPipe
  ]
})
export class MaterialModule {
  constructor(private dateAdapter:DateAdapter<Date>){
    dateAdapter.setLocale('es')
  }
 }
