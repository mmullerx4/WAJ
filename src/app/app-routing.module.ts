import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalListComponent } from './journal/journal-list/journal-list.component';
import { JournalDetailComponent } from './journal/journal-detail/journal-detail.component';
import { JournalEditComponent } from './journal/journal-edit/journal-edit.component';
import { JournalItemComponent } from './journal/journal-item/journal-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/journals', pathMatch: 'full' },
  { path: 'journals', component: JournalListComponent },
  { path: 'journals/:id', component: JournalDetailComponent },
  { path: 'journals/:id/edit', component: JournalEditComponent },
  { path: 'journals/:id/item', component: JournalItemComponent }, 
  { path: '**', redirectTo: '/journals', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

