import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-add-specialists',
  templateUrl: './add-specialists.component.html',
  styleUrls: ['./add-specialists.component.scss'],
})
export class AddSpecialistsComponent {
  addSpecialist: FormGroup;
  specialty: string[] = ['Psychologist', 'Psychotherapist', 'Psychiatrist'];

  constructor(private formBuilder: FormBuilder, private appData: DataService) {
    this.addSpecialist = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_ ]*$'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      speciality: new FormControl(null, Validators.required),
    });
  }

  submit() {
    const newSpec = this.addSpecialist.value;
    const fullDataOfNewSpec = {
      ...newSpec,
      isFavourite: false,
      isDisFavourite: false,
    };

    this.appData.create(fullDataOfNewSpec);
    this.addSpecialist.reset();
    this.addSpecialist.get('name')?.markAsUntouched();
    this.addSpecialist.get('name')?.markAsPristine();

    console.log(this.addSpecialist.controls);
    // console.log(this.addSpecialist);
    this.addSpecialist.markAsPristine();
    this.addSpecialist.markAsUntouched();
  }
}
