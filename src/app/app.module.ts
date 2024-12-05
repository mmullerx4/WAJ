import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JournalListComponent } from './journal-list.component';
import { JournalEditComponent } from './journal-edit.component';
import { JournalItemComponent } from './journal-item.component';

@NgModule({
  declarations: [
    AppComponent,
    JournalListComponent,
    JournalEditComponent,
    JournalItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
