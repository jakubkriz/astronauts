import { Component, OnInit } from '@angular/core';

import { AstronautService } from '../../services/astronaut.service'
import { Astronaut } from '../../models/astronaut';

@Component({
  selector: 'astronauts',
  templateUrl: './astronauts.component.html',
  styleUrls: ['./astronauts.component.css']
})
export class AstronautsComponent implements OnInit {
  astronauts: Astronaut[];
  public title: string;
  public message: string;
  public cancelClicked: boolean;
  public pageTitle:string;

  constructor(private astronautService:AstronautService) {
  }

  ngOnInit() {
    this.pageTitle = 'Astronauts';
    this.astronautService.getAstronauts().then(astronauts => this.astronauts = astronauts);
    this.title = 'Delete astronaut';
    this.message = 'Do you really want to delete this astronaut?';
    this.cancelClicked = false;
  }

  delete(astronaut: Astronaut): void {
    this.astronautService
        .delete(astronaut.id)
        .then(() => {
          this.astronauts = this.astronauts.filter(h => h !== astronaut);
        });
  }

}