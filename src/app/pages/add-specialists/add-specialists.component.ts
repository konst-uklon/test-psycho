import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-add-specialists',
  templateUrl: './add-specialists.component.html',
  styleUrls: ['./add-specialists.component.scss'],
})
export class AddSpecialistsComponent {
  addSpecialist: FormGroup;
  specialty: string[] = ['Psychologist', 'Psychotherapist', 'Psychiatrist'];
  @ViewChild('f', { static: true }) userNgForm: any;

  constructor(private appData: DataService) {
    this.addSpecialist = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_ ]*$'),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
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
        this.userNgForm.resetForm();
      },
      (err: string) => console.error(err)
    );
  };
}
