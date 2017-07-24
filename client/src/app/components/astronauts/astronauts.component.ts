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

  constructor(private astronautService:AstronautService) {
  }

  ngOnInit() {
    this.astronautService.getAstronauts().then(astronauts => this.astronauts = astronauts);
  }

  delete(astronaut: Astronaut): void {
    this.astronautService
        .delete(astronaut.id)
        .then(() => {
          this.astronauts = this.astronauts.filter(h => h !== astronaut);
        });
  }

}