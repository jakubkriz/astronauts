import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Astronaut } from '../../models/astronaut';
import { AstronautService } from '../../services/astronaut.service'

@Component({
  selector: 'astronaut-new',
  templateUrl: './astronaut-new.component.html',
  styleUrls: ['./astronaut-new.component.css']
})
export class AstronautNewComponent implements OnInit {
  astronaut: Astronaut;
  astronautForm: FormGroup;

  constructor(
    private location: Location, 
    private fb: FormBuilder, 
    private astronautService:AstronautService) { }

  ngOnInit() {
    this.astronautForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthdate: ['', Validators.required],
      superpower: ['', Validators.required]
    });
  }

  onSubmit(form: FormGroup) { 
    this.astronaut = new Astronaut(
      form.value.firstname, 
      form.value.lastname,
      form.value.birthdate,
      form.value.superpower);

    this.astronautService
        .create(this.astronaut)
        .then(astronaut => {
            console.log(astronaut);
        });
    
    this.location.back();
  }

  // TODO: Remove this when we're done

  goBack(): void {
    this.location.back();
  }

}
