import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JournalListComponent } from './journal-list.component';
import { JournalEditComponent } from './journal-edit.component';
import { JournalItemComponent } from './journal-item.component';
import { JournalDetailComponent } from './journal-detail/journal-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    JournalListComponent,
    JournalEditComponent,
    JournalItemComponent,
    JournalDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
