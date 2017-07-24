import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { AppComponent } from './app.component';

import { AstronautService } from './services/astronaut.service';
import { AstronautNewComponent } from './components/astronaut-new/astronaut-new.component';
import { AstronautsComponent } from './components/astronauts/astronauts.component'
import { AppRoutingModule } from './modules/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AstronautNewComponent,
    AstronautsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' 
    })
  ],
  providers: [AstronautService],
  bootstrap: [AppComponent]
})
export class AppModule { }
