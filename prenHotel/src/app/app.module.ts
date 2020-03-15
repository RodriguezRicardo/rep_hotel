import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BookingList } from './bookingList.model';
import { Booking } from './booking.model';
import { Room } from './room.model';
import { ListaPrenComponent } from './lista-pren/lista-pren.component';
import { DettagliStanzaComponent } from './dettagli-stanza/dettagli-stanza.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaPrenComponent,
    DettagliStanzaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
