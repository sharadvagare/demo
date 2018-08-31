import { Component } from '@angular/core';

@Component({
  selector: 'my-template',
  templateUrl: '../views/templateForm.component.html',
  styles:[`input.ng-invalid{border-left: 5px solid red;}
           input.ng-valid{border-left: 5px solid green;}
          `]
})

export class TemplateFromsComponent {
  myName = "Sharad";
  onSubmit(value: any){
    console.log(value)
  }
}
