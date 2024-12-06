import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JournalService } from '../journal.service';
import { Journal } from '../journal.model';

@Component({
  selector: 'app-journal-detail',
  templateUrl: './journal-detail.component.html',
  styleUrls: ['./journal-detail.component.css']
})
export class JournalDetailComponent {
  journal!: Journal;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private journalService: JournalService
  ) {}

  ngOnInit() {
    const journalId = +this.route.snapshot.params['id'];  // Convert to number
    this.fetchJournal(Number(journalId));
  }

  fetchJournal(id: number) {
    const journal = this.journalService.getJournal(id);
    if (journal) {
      this.journal = journal;
    } else {
      // Handle the case where no journal was found
      console.error('Journal not found!');
    }
  }


  onEdit() {
    // Redirect to the edit route for this journal
    this.router.navigate(['/journals', this.journal?.id, 'edit']);
  }

  onDelete() {
    if (confirm('Are you sure you want to delete this journal?')) {
      this.journalService.deleteJournal(this.journal?.id); // Implement delete in the service
      this.router.navigate(['/journals']); // Redirect to the list
    }
  }
}
