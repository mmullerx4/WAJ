import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { QuoteService } from '../quote.service';
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
  randomQuote: string = '';
  isEditMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private journalService: JournalService,
    public router: Router,
    private quoteService: QuoteService
  ) {}

  ngOnInit() {
    this.randomQuote = this.quoteService.getRandomQuote();
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isEditMode = true;
      const journalId = +id; // Convert the ID to a number
      this.journal = this.journalService.getJournal(journalId);

      if (!this.journal) {
        // If the journal isn't found, show an error and do not proceed
        alert('Journal not found!');
        this.router.navigate(['/journals']); // Redirect to the journal list
      }
    } else {
      // Only set to create mode if no ID is provided at all
      this.isEditMode = false;
      this.journal = { title: '', content: '', date: new Date() } as Journal;
    }
  }


  onSave(journal: Journal): void {
    if (this.isEditMode && this.journal) {
      // Update existing journal
      const updatedJournal: Journal = {
        ...this.journal, // Retain properties like `id` and `date`
        title: this.journal.title,
        content: this.journal.content,
      };

      this.journalService.updateJournal(this.journal.id, updatedJournal);
      alert('Journal updated successfully!');
      this.router.navigate(['/journals', this.journal.id]); // Redirect back to detail view
    } else {
      // Create a new journal
      const newJournal: Journal = {
        id: Date.now(), // Use a unique ID generator (e.g., timestamp)
        title: this.journal.title,
        content: this.journal.content,
        date: new Date(), // Default to the current date
      };

      this.journalService.addJournal(newJournal);
      alert('New journal created successfully!');
      this.router.navigate(['/journals']); // Redirect to the journal list
    }
}



}
