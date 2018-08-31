import { Component } from '@angular/core';
import {Pipe,PipeTransform} from '@angular/core';
import {FilterArrayPipe} from '../filters/filter.pipe';

@Component({
  selector: 'about',
  template: `
    <h1>About this app{{name | uppercase }} </h1>

    <span [ngSwitch]="name">
      <span *ngSwitchCase="'sharad'">sharad</span>
      <span *ngSwitchCase="'ravi'">ravi</span>
      <span *ngSwitchCase="'pratik'">pratik</span>
      <span *ngSwitchDefault>not IN</span>
    </span>
    <img [src]="imglink"/>
  `,
})

export class AboutComponent {
    private imglink;
    private name;
    constructor(){
      this.imglink = 'http://lorempixel.com/400/200';
      this.name = 'ravi';
    }
};
