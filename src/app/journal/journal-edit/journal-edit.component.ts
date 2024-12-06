import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JournalService } from '../journal.service';
import { Journal } from '../journal.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-journal-edit',
  templateUrl: './journal-edit.component.html',
  styleUrls: ['./journal-edit.component.css'],
})
export class JournalEditComponent implements OnInit {
  journal: Journal | undefined; // Ensure the journal is optional to handle invalid cases
  isEditMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private journalService: JournalService,
    public router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.journal = this.journalService.getJournal(+id); // Convert id to number
      if (!this.journal) {
        // If no journal is found, redirect to the list
        alert('Journal not found!');
        this.router.navigate(['/journals']);
      }
    }
  }

  onSave(updatedTitle: string, updatedContent: string) {
    if (this.isEditMode && this.journal) {
      const updatedJournal: Journal = {
        ...this.journal, // Keep existing properties like `id` and `date`
        title: updatedTitle,
        content: updatedContent,
      };

      this.journalService.updateJournal(this.journal.id, updatedJournal);
      this.router.navigate(['/journals', this.journal.id]); // Redirect back to detail view
    }
  }
}
