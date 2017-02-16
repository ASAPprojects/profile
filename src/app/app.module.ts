import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { ImageFrameComponent } from './image-frame/image-frame.component';

import { AppRoutingModule }     from './app-routing.module';
import { GreetingCardComponent } from './greeting-card/greeting-card.component';
import { WishesComponent } from './wishes/wishes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageFrameComponent,
    GreetingCardComponent,
    WishesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
