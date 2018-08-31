import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'my-modelForm',
  templateUrl: '../views/modelForm.component.html',

})

export class ModelFormComponent {

  userForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      postalcode: new FormControl()
    });
  });

}
