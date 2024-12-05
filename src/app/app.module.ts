import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { JournalComponent } from './journal/journal.component';
import { JournalListComponent } from './journal/journal-list/journal-list.component';
import { JournalEditComponent } from './journal/journal-edit/journal-edit.component';
import { JournalItemComponent } from './journal/journal-item/journal-item.component';
import { JournalDetailComponent } from './journal/journal-detail/journal-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    JournalComponent,
    JournalListComponent,
    JournalEditComponent,
    JournalItemComponent,
    JournalDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
