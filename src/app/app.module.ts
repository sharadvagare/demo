import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //model driven forms
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { TemplateFromsComponent } from './components/templateFroms.component';
import { ModelFormComponent } from './components/modelForm.component';

import {routing} from './app.routing';

import {FilterArrayPipe} from './filters/filter.pipe';

@NgModule({
  imports: [BrowserModule,FormsModule,HttpModule,routing, ReactiveFormsModule],
  declarations: [AppComponent,UserComponent,AboutComponent,
                  FilterArrayPipe, TemplateFromsComponent, ModelFormComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
