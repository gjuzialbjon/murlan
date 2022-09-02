import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CardsComponent } from './cards/cards.component'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ValueToTextPipe } from './pipes/value-to-text.pipe'

@NgModule({
	declarations: [AppComponent, CardsComponent, ValueToTextPipe],
	imports: [BrowserModule, AppRoutingModule, DragDropModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
