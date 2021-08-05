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
    this.addSpecialist = formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_ ]*$'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      speciality: new FormControl(null, Validators.required),
    });
  }

  submit = () => {
    const newSpec = this.addSpecialist.value;
    const fullDataOfNewSpec = {
      ...newSpec,
      isFavourite: false,
      isDisFavourite: false,
    };

    this.appData.create(fullDataOfNewSpec).subscribe(
      () => {
        this.resetForm();
      },
      (err: string) => console.error(err)
    );
  };

  resetForm = () => {
    console.log(this.addSpecialist);
    this.addSpecialist.reset();
    this.addSpecialist.markAsUntouched();
    this.addSpecialist.markAsPristine();
    this.addSpecialist.get('name')?.setErrors(null);
    this.addSpecialist.get('email')?.setErrors(null);
    this.addSpecialist.get('speciality')?.setErrors(null);
  };
}
