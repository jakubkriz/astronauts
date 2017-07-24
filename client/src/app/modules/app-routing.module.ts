import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AstronautNewComponent } from '../components/astronaut-new/astronaut-new.component';
import { AstronautsComponent } from '../components/astronauts/astronauts.component'

const routes: Routes = [
  {path:'', redirectTo: '/astronauts', pathMatch: 'full'},
  {path: 'astronauts', component:AstronautsComponent},
  {path: 'astronaut/new', component: AstronautNewComponent},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
