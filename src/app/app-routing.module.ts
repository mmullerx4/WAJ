import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalListComponent } from './journal/journal-list/journal-list.component';
import { JournalDetailComponent } from './journal/journal-detail/journal-detail.component';
import { JournalEditComponent } from './journal/journal-edit/journal-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/journals', pathMatch: 'full' },  // Default route
  { path: 'journals', component: JournalListComponent },
  { path: 'journals/new', component: JournalEditComponent },
  { path: 'journals/:id', component: JournalDetailComponent },
  { path: 'journals/:id/edit', component: JournalEditComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
