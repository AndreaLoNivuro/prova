import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  powers: string[] = ['Super forza', 'Super velocità'];

  heroList: { name: string, power: string }[] = [];

  /*heroForm: FormGroup = new FormGroup({
    name: new FormControl(),
    power: new FormControl()
  });*/

  heroForm: FormGroup; 
  
  constructor(private fb: FormBuilder) {
    this.heroForm = this.fb.group({
      name: ["", Validators.compose([Validators.required, Validators.minLength(2)])],
      power: ["", Validators.required],
      rating: "",
      address: this.fb.group({ 
        street: '',
        city: '',
        state: '',
        zip: ["", Validators.compose([Validators.maxLength(5), Validators.minLength(5)])],
      }),
    });
  }

  get nameControl(): FormControl {
    return this.heroForm.get('name') as FormControl;
  }

  get powerControl(): FormControl {
    return this.heroForm.get('power') as FormControl;
  }

  setDefault() {
    this.heroForm.setValue({
      name: 'Goku'
    });
    /*this.heroForm.patchValue({
      name: 'Goku'
    });
    this.nameControl.setValue('Goku');
    this.nameControl.patchValue('Goku');*/
  }

  addHero() {
    this.heroList.push({
      name: this.nameControl.value,
      power: this.powerControl.value
    });
  }

  crearHero() {
    this.heroForm.reset({
      name: 'Gohan'
    });
  }

  ngOnInit(): void {
  }

}
