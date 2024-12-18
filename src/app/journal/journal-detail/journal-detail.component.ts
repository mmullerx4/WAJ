import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { JournalService } from '../journal.service';
import { QuoteService } from '../quote.service';
import { Journal } from '../journal.model';

@Component({
  selector: 'app-journal-detail',
  templateUrl: './journal-detail.component.html',
  styleUrls: ['./journal-detail.component.css']
})
export class JournalDetailComponent implements OnInit {
  journal!: Journal;
  randomQuote: { quote: string, author: string } | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private journalService: JournalService,
    private quoteService: QuoteService
  ) { console.log('JournalDetailComponent constructor called'); }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log("Journal ID from URL:", id);

    if (!id) {
      console.error('Journal ID is missing from the URL');
      return;
    }

    this.fetchJournal(id);
    console.log(id);
    this.quoteService.getRandomQuote().subscribe((quote: { quote: string, author: string }) => {
      this.randomQuote = quote;
    });

    console.log('This is console test 2');
  }

  fetchJournal(id: string) {
    this.journalService.getJournal(id).subscribe(
      (journal: Journal) => {
        console.log('Journal data in component:', journal);
        this.journal = journal;
      },
      (error) => {
        console.error('Error fetching journal:', error); // Backend issue log
      }
    );
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
